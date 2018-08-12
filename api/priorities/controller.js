const models = require('../../models')
const priority = models.priority;

const controller = {
    get: (req, res, next) => {
        priority
            .findAll()
            .then(priorities => {
                res.status(200).send({
                    priorities
                });
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    getOneById: (req, res, next) => {
        const id = Number(req.params.id)
        priority
            .findById(id)
            .then(priority => {
                if (priority) {
                    res.status(200).send({
                        priority
                    })
                } else {
                    res.status(400).send({
                        message: `Priority is not found`
                    })
                }
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    // getOneByKeyword: (req, res, next) => {
    //     const keyword = req.query.q;
    //     priority
    //         .findAll({
    //             where: {

    //             }
    //         })
    // },

    updateOneById: (req, res, next) => {
        const id = Number(req.params.id);
        const newPriorityName = req.body.priority_name;
        console.log(newPriorityName);
        priority
            .update({
                   priority_name : newPriorityName,
                   updated_at : new Date()
                },
                {
                    where: {
                        id : id
                    }
                })
            .then(priority => {
                if (priority){
                    res.status(202).send(priority);
                }
                else{
                    res.status(400).send({message: "Priority is not changed"});
                }
            })
            .catch(error => {
                res.status(400).send(error);
            })
    },

    deleteOneById: (req, res, next) => {
        const id = req.params.id;
        priority
            .destroy({
                where: {
                    id : id
                }
            })
            .then(priority => {
                res.status(202).send(priority);
            })
            .catch(error => {
                res.status(400).send(error);
            })
    },

    create: (req, res, next) => {
        res.send({
            priorities
        });
    }
}

module.exports = controller