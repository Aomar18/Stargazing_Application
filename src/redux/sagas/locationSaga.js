import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//MAIN SAGA
function* locationSaga() {
  yield takeLatest('FETCH_LOCATION', fetchLocation);
  yield takeLatest('ADD_ITEM', addItem);
  yield takeLatest('BY_ID', byId);
  yield takeEvery('DELETE_POST', deletePost);
  yield takeEvery('BY_POST', byPost);
  yield takeEvery('UPDATE_POST', updatePost);
}


//GET DATA
function* fetchLocation() {
  try {
    const LocationResponse = yield call(axios.get, '/api/location/home')

    const responseAction = { type: 'SET_LOCATION', payload: LocationResponse.data };
    yield put(responseAction);
  }
  catch (error) {
    console.log('ERROR IN - getLocationSaga(); - index.js', error);
    alert('unable to retrieve data');
  }
}


//GET BY ID 
function* byId() {
  try {
    const response = yield call(axios.get, `/api/location/profile`);
    yield put({ type: 'SET_LOCATION', payload: response.data })
  }
  catch (error) {
    console.log('ERROR in get posts in ID sagas');
  }
}

//GET BY SINGLE  USER POST
function* byPost(action) {
  console.log(action.payload);
  try {
    const response = yield call(axios.get, `api/location/details/${action.payload}`)
    yield put({ type: 'SET_POST', payload: response.data })
  }
  catch (error) {
    console.log('ERROR in byPost in sagas');
  }
}

//ADD DATA TO DATABASE
function* addItem(action) {
  try {
    yield call(axios.post, '/api/location/', action.payload);
    yield put({ type: 'FETCH_LOCATION' });
  } catch (error) {
    console.log('error in post saga', error);
    alert('unable to add ')
  }
}


//REMOVE POST 
function* deletePost(action) {
  console.log(action.payload);
  try {
    yield call(axios.delete, `/api/location/profile/${action.payload}`);
    yield put({ type: 'FETCH_LOCATION' })
  } catch (error) {
    alert('unable to remove post');
  }
}





//UPDATE POST
function* updatePost(action) {
  console.log(action.payload);
  try {
    yield call(axios.put, `/api/location` , action.payload);
    yield put({ type: 'FETCH_LOCATION' })
  } catch (error) {
    alert('Unable to update post')
  }
}






export default locationSaga;