



module_exports = {
    create: (req, res, next) => {
        const dbInstance = res.app.get('db');

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },
    getOne: (res, req, next) => {
        const dbInstance = res.app.get('db')

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });

    },
    getAll: (res, req, next) => {
        const dbInstance = rres.app.get('db')

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },
    upDate: (res, req, next) => {
        const dbInstance = res.app.get('db')

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },
    delete: (res, req, next) => {
        const dbInstance = res.app.get('db')

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    }
}