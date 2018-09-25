import { put, call, takeLatest , takeEvery } from 'redux-saga/effects';
import axios from 'axios';


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

  // try {
  //   const response = yield call(axios.get, `/api/location/profile`);
  //   const responseAction = { type: 'SET_LOCATION', payload: response.data };
  //   yield put(responseAction);

  // }
  // catch (error) {
  //   console.log('ERROR in get posts in ID sagas');
  // }

  try {
      const response = yield call(axios.get, `/api/location/profile`);
      yield put({type: 'SET_LOCATION' , payload:response.data})
      // const responseAction = { type: 'SET_LOCATION', payload: response.data };
      // yield put(responseAction);
  
    }
    catch (error) {
      console.log('ERROR in get posts in ID sagas');
    }
}


function* byPost(action){
  console.log(action.payload);
  try {
    const response = yield call(axios.get, `api/location/details/${action.payload}`)
    yield put({type: 'SET_POST' , payload: response.data})
  }
  catch(error){
    console.log('ERROR in byPost in sagas');
  }
}

//ADD DATA TO DB
function* addItem(action) {
  try {
    yield call(axios.post, '/api/location/', action.payload);
    yield put({ type: 'FETCH_LOCATION' });
  } catch (error) {
    console.log('error in post saga', error);
    alert('unable to add ')
  }
}

function* deletePost(action) {
  console.log(action.payload);
      try {
        yield call(axios.delete, `/profile/id`);
        yield put({ type: 'DELETE_POST'})
      } catch(error){
        alert('unable to remove post');
      }
  }

function* locationSaga() {
  yield takeLatest('FETCH_LOCATION', fetchLocation);
  yield takeLatest('ADD_ITEM', addItem);
  yield takeLatest('BY_ID', byId);
  yield takeEvery('DELETE_POST', deletePost);
  yield takeEvery('BY_POST', byPost);
}



export default locationSaga;