import * as actionType from '../actions/ActionType';

export function postProjectReducer(state, action){
  const newState = {...state}
  switch(action.type){

    case actionType.GET_SKILLS_SUCCESS : newState.allSkills = action.payload.skills;
                                         return newState;
    case actionType.GET_SKILLS_FAILURE :  newState.skills = [];
                                        return newState;

    case actionType.FILE_UPLOAD_SUCCESS : newState.uploadname = action.payload.uploadname;
                                          newState.originalname = action.payload.originalname;
                                          return newState;

    case actionType.FILE_UPLOAD_FAILURE :newState.uploadname= undefined;
                                        newState.originalname = undefined;
                                          return newState;

    case actionType.POST_PROJECT_SUCCESS :newState.projectid = action.payload.projectid;
                                          return newState;
    case actionType.POST_PROJECT_FAILURE :newState.projectid = undefined;
                                            return newState;
    case actionType.MAP_FILES_TO_PROJECT_SUCCESS :newState.mappedfilesToProjectFlag = action.payload.success;
                                                  return newState;
    case actionType.MAP_FILES_TO_PROJECT_FAILURE :newState.mappedfilesToProjectFlag = action.payload.success;
                                                  return newState;
    case actionType.MAP_SKILLS_TO_PROJECT_SUCCESS : newState.mappedSkillsToProjectFlag = action.payload.success;
                                                  return newState;
    case actionType.MAP_SKILLS_TO_PROJECT_FAILURE :  newState.mappedSkillsToProjectFlag = action.payload.success;
                                                  return newState;
    case actionType.MAP_PROJECT_TO_USER_SUCCESS : newState.mappedUserToProjectFlag = action.payload.success;
                                                  return newState;
    case actionType.MAP_PROJECT_TO_USER_FAILURE :  newState.mappedUserToProjectFlag = action.payload.success;
                                                  return newState;
    case actionType.GET_RECOMMENDED_PROJECTS_SUCCESS : newState.recommendedProjects = action.payload.recommendedProjects;
                                                      return newState;
    case actionType.GET_RECOMMENDED_PROJECTS_FAILURE : newState.recommendedProjects = undefined;
                                                      return newState;
     default : return newState;

  }

}