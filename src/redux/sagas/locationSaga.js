import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchLocation() {
  try {
    const LocationResponse = yield call(axios.get, '/api/location')

    const responseAction = { type: 'SET_LOCATION', payload: LocationResponse.data };
    yield put(responseAction);
  }
  catch (error) {
    console.log('ERROR IN - getLocationSaga(); - index.js', error);
    alert('unable to retrieve data');
  }
}


  function* addItem(action) {
    try {
      yield call(axios.post, '/api/location/', action.payload);
      yield put({ type: 'FETCH_LOCATION' });
    } catch (error) {
      console.log('error in post saga', error);
      alert('unable to add ')
    }
  }


  function* locationSaga() {
    yield takeLatest('FETCH_LOCATION', fetchLocation);
    yield takeLatest('ADD_ITEM', addItem);
  }


  export default locationSaga;