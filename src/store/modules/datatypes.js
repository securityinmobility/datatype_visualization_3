const state = {
    datatype: "Datatypes_Communication",
    carmodel: "",
    context: "",
    radius1: "100",
    radius2: "140",
};

const getters = {
    allDatatypes: (state) => state.datatype,
    getCarmodel: (state) => state.carmodel,
    getContext: (state) => state.context,
    getRadius1: (state) => state.radius1,
    getRadius2: (state) => state.radius2
};

const actions = {};

const mutations = {
    setDatatype: (state, datatype) => (state.datatype = datatype),
    setContext: (state, context) => (state.context = context),
    setCarmodel: (state, carmodel) => (state.carmodel = carmodel),
};

export default {
    state,
    getters,
    actions,
    mutations
};