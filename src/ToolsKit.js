class ToolsKit {
  
    static isUserAuthorized() {
        return true;
        let params = window.location.href.split('/');
        if (params[3] === '' || params[3] === 'register' || params[3] === 'sign-in' || sessionStorage.getItem('user')) {
            return true;
        }

        return false;
    }

    static getToken() {
        return 'toto';
        if (sessionStorage.getItem('user')) {
            let user = JSON.parse(sessionStorage.getItem('user'));
            return user.token;
        }

        return null;
    }
}

export default ToolsKit;