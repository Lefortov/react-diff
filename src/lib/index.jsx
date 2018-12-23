import React, {Fragment} from 'react';
import * as JsDiff from 'diff';
import './styles.css';

const types = {
    chars: 'chars',
    words: 'words',
    sentences: 'sentences',
    json: 'json',
    lines: 'lines',
    wordsWithSpace: 'wordsWithSpace',
    trimmedLines: 'trimmedLines',
    css: 'css',
    arrays: 'arrays'
};

const fnMap = {
    'chars': JsDiff.diffChars,
    'words': JsDiff.diffWords,
    'sentences': JsDiff.diffSentences,
    'json': JsDiff.diffJson,
    'lines': JsDiff.diffLines,
    'wordsWithSpace': JsDiff.diffWordsWithSpace,
    'trimmedLines': JsDiff.diffTrimmedLines,
    'css': JsDiff.diffCss,
    'arrays': JsDiff.diffArrays
};

let index = 0;

const getRowId = () => Math.floor(Math.random() * (9999999-1)) + 1;

const getRemovedRow = (value) => {
    index += 1;
    return (
        <div key={getRowId()} className="diff-row">
            <div className="diff-index diff-index_removed">{index}</div>
            <div className="diff-index diff-index_removed" />
            <div className="diff-value_removed">-</div>
            <div className="diff-value_removed">{value}</div>
        </div>
    );
};

const getAddedRow = (value) => {
    index += 1;
    return (
        <div key={getRowId()} className="diff-row">
            <div className="diff-index diff-index_added" />
            <div className="diff-index diff-index_added">{index}</div>
            <div className="diff-value_added">+</div>
            <div className="diff-value_added">{value}</div>
        </div>
    );
};

const getUntouchedRow = (value) => {
    const rows = value.split('\n');
    return <Fragment key={getRowId()}>
        {rows.map((line) => {
            index += 1;
            return (
                <div key={getRowId()} className="diff-row">
                    <div className="diff-index diff-index_unchecked">{index}</div>
                    <div className="diff-index diff-index_unchecked">{index}</div>
                    <div>{line}</div>
                </div>
            )
          })
        }
    </Fragment>
};

const Diff = ({ inputA, inputB, type, options }) => {
    index = 0;
    const diff = fnMap[type](inputA, inputB, options);
    const result = diff.map((part) => {
        return part.added ?
            getAddedRow(part.value) :
            part.removed ?
                getRemovedRow(part.value) :
                getUntouchedRow(part.value);
    });
    return (
        <pre className='diff-result'>
        {result}
      </pre>
    );
};

Diff.defaultProps = {
    inputA: '',
    inputB: '',
    type: 'chars'
};

Diff.types = types;

export { Diff as default };
