import { IndexDbService } from "./indexDB.service";

const saveDataForLater = async (formData) => {
    await IndexDbService.saveData(formData)
  };


export const CachingService = {
    save: saveDataForLater
}