const { Schema, model } = require('mongoose');
const moment = require('moment');


const MensajeSchema = Schema({

    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

MensajeSchema.virtual('fecha').get(function () {
    const hoyMes = moment(this.createdAt);
    return hoyMes.format('HH:mm a | MMMM Do')
});


MensajeSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Mensaje', MensajeSchema);
