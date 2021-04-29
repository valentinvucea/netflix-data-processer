import WorksService from "../../services/works.service";
import { WORK_FILTER_ALL } from "../../helpers/constants";
import { getErrorMessage } from "../../helpers/handle.errors";
import { 
    FETCH_WORKS,
    INIT_HOME,
    FILTER_HOME,
    SET_INIT_DATA,
    SET_HOME_DATA,
    SET_ERROR
} from "../types";

const state = {
    errors: null,
    all: [],
    shown: [],
    activeFilter: WORK_FILTER_ALL
};

const getters = {
    shown(state) {
        return state.shown;
    },
    activeFilter(state) {
        return state.activeFilter
    }
};

const actions = {
    async [INIT_HOME](context) {
        try {
            await context.dispatch(FETCH_WORKS, {}, { root: true});
            const works = context.rootState.admin.works;
            context.commit(SET_INIT_DATA, works);
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    },

    [FILTER_HOME](context, filter) {
        try {
            const data = WorksService.filterByType(context.state.all, filter);
            context.commit(SET_HOME_DATA, { data, filter });
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    }
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_INIT_DATA](state, works) {
        state.all = works;
        state.shown = works;
        state.activeFilter = WORK_FILTER_ALL;
    },
    [SET_HOME_DATA](state, { data, filter }) {
        state.shown = data;
        state.activeFilter = filter;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};