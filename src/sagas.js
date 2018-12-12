
import { put, takeEvery, all } from 'redux-saga/effects';
import solutions from './solutions';

// Sagas
function* solveProblemSaga(data) {
    const { problemNum } = data;
    const problemName = 'Problem' + problemNum;
    const problemFunc = solutions[problemName];

    const answer = yield problemFunc(data.inputText);
    yield put({type: 'SOLVE_PROBLEM_DONE', answer});
}

function* watchSolveProblem() {
    yield takeEvery('SOLVE_PROBLEM', solveProblemSaga);
}
export default function* rootSaga() {
    yield all([
        watchSolveProblem(),
    ])
}