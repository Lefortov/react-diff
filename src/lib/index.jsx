import React from 'react';
import * as JsDiff from 'diff';

const types = {
    chars: 'chars',
    words: 'words',
    sentences: 'sentences',
    json: 'json'
};

const fnMap = {
    'chars': JsDiff.diffChars,
    'words': JsDiff.diffWords,
    'sentences': JsDiff.diffSentences,
    'json': JsDiff.diffJson
};

const Diff = ({ inputA, inputB, type }) => {
    const diff = fnMap[type](inputA, inputB);
    const result = diff.map(function(part, index) {
        const spanStyle = {
            backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
        };
        return <span key={index} style={spanStyle}>{part.value}</span>
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

export default Diff;
