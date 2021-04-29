import ApiService from "./api.service";
import { TYPES_FILTERS_MAP, WORK_FILTER_ALL, WORK_TYPES } from "../helpers/constants";

const WorksService = {
    async query(params) {
        return ApiService.query("works", params);
    },
    
    get(id) {
        return ApiService.get("works", id);
    },
    
    create(params) {
        ApiService.setAuthorizationHeader();
        ApiService.setMultipartHeader();
        
        let fd = new FormData();
        fd.append('title', params.title);
        fd.append('description', params.description);
        fd.append('type', params.type);
        fd.append('image', params.image);

        return ApiService.post("works", fd);
    },
    
    update(id, params) {
        ApiService.setAuthorizationHeader();
        return ApiService.update("works", id, params);
    },
    
    destroy(id) {
        ApiService.setAuthorizationHeader();
        return ApiService.delete('works', id);
    },

    filterByType(works, type) {
        return works.filter(work => {
            return (WORK_FILTER_ALL === type) || (type === TYPES_FILTERS_MAP[work.type]); 
        });
    },

    transform(works) {
        return works.map(work => {
            return {
                ...work,
                thumb: `./images/gallery/thumbs/${work.image}`,
                src: `./images/gallery/${work.image}`
            };
        });
    }
};

export default WorksService;
