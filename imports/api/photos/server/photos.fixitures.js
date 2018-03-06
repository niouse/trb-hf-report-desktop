
import {photosMongo} from "./../photos.js";
import photosDefaults from "./photos.defaults.js";


loadPhotos = function(callback){
	 if (photosMongo.find({}).fetch().length === 0) {
		 photosDefaults.forEach((item, index)=>{
	     	photosMongo.insert(photosDefaults[index]); 
		 })
         callback()
   }
}
    