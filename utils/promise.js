export const promiseFun = function (obj) {
    const { eventName, params, type } = obj;
    if (type == "qqmapsdk") {
        const app = getApp();
        console.log("app",app)
        return new Promise((resolve, reject) => {
            app.qqmapsdk[eventName]({
                ...params,
                success(result) {
                    resolve(result);
                },
                fail(error) {
                    reject(error);
                },
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            // throw new Error("error错误");
            eventName({
                ...params,
                success(result) {
                    resolve(result);
                },
                fail(error) {
                    reject(error);
                },
            });
        });
    }
};
