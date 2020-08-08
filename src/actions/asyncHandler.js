/**
 * 
 * @param {Function} dispatch 
 * @param {String} actionType 
 * @param {Function} apiFunction 
 * @param {Array} apiArgs 
 */
export const handleAsync = (dispatch, actionType, apiFunction, apiParams) => {
	dispatch({
		type: actionType + '_PENDING'
	})
	apiFunction(apiParams).then(data => {
		dispatch({
			type: actionType + '_FULFILLED',
			payload: data
		});
	}).catch(error => {
		dispatch({
			type: actionType + '_REJECTED',
			payload: error
		});
	})
}