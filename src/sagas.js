
import { put, takeEvery, all, call, take, fork } from 'redux-saga/effects';
import solutions from './solutions';

// Sagas
function* solveProblemSaga(data) {
    yield put({type: 'IS_CALCULATING_TRUE'});
    const { problemNum } = data;
    const problemName = 'Problem' + problemNum;
    const problemFunc = solutions[problemName];

    const answer = yield problemFunc(data.inputText);
    yield put({type: 'SOLVE_PROBLEM_DONE', answer});
    yield put({type: 'IS_CALCULATING_FALSE'});

}

function* watchSolveProblem() {
    yield takeEvery('SOLVE_PROBLEM', solveProblemSaga);
}
export default function* rootSaga() {
    yield all([
        watchSolveProblem(),
    ])
  }