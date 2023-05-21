/*
- Retrieve all schedules that are available with a GET request to /api/schedules
- filter response (an array of objects that represent schedules to those where the
value of student_email is null) to available schedules
- If no schedules are available alert the user "currently no available schedules"
- Create an available schedules object,
- iterate through the returned array of objects from request.response, if the staff_id
is already in the object, add 1 to its value, if the staff_id is not already in the object
add the key as 'Staff ${staff_id}'





- declare a variable schedulesObj to an empty object
- otherwise,
- iterate through availableScheules with schedule object as an argument
 - declare a variable staffKey to the string 'Staff ${schedule.staff_id}`
 - if schedulesObj has the current staffKey as a key, add 1 to its value
 - if not, add the key to schedulesObj with a value of 1
- alert(`${schedulesobj}`) to the user


*/

function getSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', '/api/schedules');
  request.timeout = 5000;
  request.responseType = 'json';

  request.addEventListener('load', event => {
    let allSchedules = request.response;
    let availableSchedules = allSchedules.filter(schedule => {
      return schedule.student_email === null;
    });

    if (availableSchedules.length === 0) {
      alert('Currently no available schedules');
      return;
    }

    let schedulesObj = {};

    availableSchedules.forEach(schedule => {
      let staffKey = `Staff ${schedule.staff_id}`
      if (schedulesObj[staffKey]) {
        schedulesObj[staffKey] += 1;
      } else {
        schedulesObj[staffKey] = 1;
      }
    });

    let alertString = '';
    Object.entries(schedulesObj).forEach(([key, value]) => {
      alertString += `${key}:${value}, `
    });

    alert(`${alertString}`)

  });

  request.addEventListener('timeout', event => {
    alert('It is taking longer than usual, please try again later');
  });

  request.addEventListener('loadend', event => {
    alert('The request has completed.')
  });

  request.send();
}
