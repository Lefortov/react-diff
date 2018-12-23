import React from 'react';
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

const getRemovedRow = (index, value) => (
    <div key={index} className="diff-row">
        <div className="diff-index diff-index_removed">{index}</div>
        <div className="diff-index diff-index_removed" />
        <div className="diff-value_removed">-</div>
        <div className="diff-value_removed">{value}</div>
    </div>
);

const getAddedRow = (index, value) => (
    <div key={index} className="diff-row">
        <div className="diff-index diff-index_added" />
        <div className="diff-index diff-index_added">{index}</div>
        <div className="diff-value_added">+</div>
        <div className="diff-value_added">{value}</div>
    </div>
);

const getUntouchedRow = (index, value) => (
    <div key={index} className="diff-row">
        <div className="diff-index diff-index_unchecked">{index}</div>
        <div className="diff-index diff-index_unchecked">{index}</div>
        <div>{value}</div>
    </div>
);

const Diff = ({ inputA, inputB, type }) => {
    const diff = fnMap[type](inputA, inputB);
    const result = diff.map((part, index) => {
        return part.added ?
            getAddedRow(index + 1, part.value) :
            part.removed ?
                getRemovedRow(index + 1, part.value) :
                getUntouchedRow(index + 1, part.value);
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
