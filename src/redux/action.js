export function AuthPage() {
    return {
        type:'AUTH'
    };
}

export function ExitProfile() {
    return {
        type:'EXIT'
    };
}


export function GetSalons() {
    return (dispatch) => {
        dispatch({type:'lOAD_SALONS'});
        fetch("http://u88202.test-handyhost.ru/query.php")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "GET_lOAD_SALONS",
                    payload: json,
                });

            })
            // .catch(err => dispatch({type:'END'}))
    };
}


export function GetFavoriteSalon() {
    return (dispatch) => {
        dispatch({type:'lOAD_FAVORITE_SALON'});
        fetch("http://u88202.test-handyhost.ru/query.php?favoriteSalon=true")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "GET_FAVORITE_SALON",
                    payload: json,
                });

            })
            .catch(err => dispatch({type:'END'}))
    };
}


export function GetFavoriteMaster() {
    return (dispatch) => {
        dispatch({type:'LOAD_FAVORITE_MASTER'});
        fetch("http://u88202.test-handyhost.ru/query.php?favoriteMaster=true")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "GET_FAVORITE_MASTER",
                    payload: json,
                });

            })
            .catch(err => dispatch({type:'END'}))
    };
}






