import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results => {
        const array = [];
        results.forEach((result, index) => {
            array.push({
                status: result.status,
                value: result,
            })
    
        });
        console.log(array);
    }))
}