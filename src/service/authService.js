import { AppConfiguration } from '../../configuration';

const AuthService =
{
    async register(model) {
        try {
            return fetch(
                `${AppConfiguration.apiUrl}/backoffice/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(model)
                }
            )
                .then(async (response) => {
                    var data = await response.json()
                    if (response.ok) {
                        return {
                            status: true,
                            result: data
                        };
                    }
                    else {
                        return {
                            status: false,
                            result: data.message
                        };
                    }
                })
                .then((data) => {
                    return data;
                })
        }
        catch (error) {
            return {
                status: false,
                result: 'ErrorAPI'
            };
        }
    },
    async login(model) {
        try {
            return fetch(
                `${AppConfiguration.apiUrl}/user/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(model)
                }
            )
                .then(async (response) => {
                 
                    var data = await response.json()
                    if (response.ok) {
                        return {
                            status: true,
                            result: data
                        };
                    }
                    else {
                        return {
                            status: false,
                            result: data.message
                        };
                    }
                })
                .then((data) => {
                    return data;
                })
        }
        catch (error) {
            return {
                status: false,
                result: 'ErrorAPI'
            };
        }
    },
    async forgotPassword(email) {
        try {
            return fetch(
                `${AppConfiguration.apiUrl}/${AppConfiguration.culture}/Account/ForgotPassword/${email}`,
                {
                    method: 'POST',
                    headers: {
                        accept: `*/*`
                    }
                }
            )
                .then(async (response) => {
                    try {
                        var data = await response.json()
                        if (response.ok) {
                            return {
                                status: true,
                                result: data
                            };
                        }
                        else {
                            return {
                                status: false,
                                result: data.message
                            };
                        }
                    }
                    catch (error) {
                        return {
                            status: false,
                            result: 'ErrorData'
                        };
                    }
                })
                .then((data) => {
                    return data;
                })
        }
        catch (error) {
            return {
                status: false,
                result: 'ErrorAPI'
            };
        }
    },
}

export default AuthService