
  
  
  const getAPIData = () => {
    
      fetch('https://6221e286666291106a161556.mockapi.io/api/osc/getMockLeads/leads')
      .then((response) => response.json())
      .then((students) => {

          const allStudentData = students;
          const currentStudent = document.querySelector('.card-component');
          console.log(students[0])

          allStudentData.map((eachStudent,i) => {
              currentStudent.innerHTML += `
              <div class="student student-${i}">
                <div>
                <span class="close-student-button">X</span>
                <img class="student-photo" src="${eachStudent?.avatar === `https://i.pravatar.cc/200` ? `https://picsum.photos/id/10${i}/200` : "https://i.pravatar.cc/200" }" >
                    <h1 class="student-name"> ${eachStudent?.name} </h1>
                    <p class="student-title uppercase">${eachStudent?.title}</p>
                    <p class="student-id">ID: ${eachStudent?.student_id}</p>
                </div>
                <div class="student-overall-status">
                    <div>
                    <p class="student-status">${eachStudent?.enrolment_status} <span class="student-enrolement-status uppercase">Enrolement Status</span><p>
                    </div>
                    <div><p class="student-status">|</p></div>
                    <div>
                    <p class="student-status">${eachStudent?.completed_courses} <span class="student-enrolement-status uppercase">Completed Courses</span><p>
                    </div>
                </div>
                <div class="student-contact-details container">
                    <p class="uppercase">Contact Details</p>
                    <span class="text-bold">Email: ${eachStudent?.email}</span>
                    <span class="text-bold">Telephone: ${eachStudent?.telephone}</span>
                </div>
                <div class="student-about-me container">
                    <p class="uppercase">About Me</p>
                    <span class="about-me-description text-bold">${eachStudent?.profile_description}</span>
                </div>
                <div class="current-course">
                    <div class="current-course-title">
                        <div>
                            <img class="red-circle" src="red-circle.png">
                            <div><h4>Current Course:</h4>
                            <p class="uppercase">${eachStudent?.course_title}</p></div>
                        </div>
                        <img class="arrow" src="arrow-right.png">
                    </div>
                    <p class="hide-course-details">${eachStudent?.enquiry}</p>
                </div>
                <div class="student-photos">
                <h4>My Photos</h4>
                ${eachStudent?.images?.map((image, index) => `<img class="img-${index}" src="${image}">`
                )}
                </div>
              <div>` 
            })

            function closeStudent() {
                const getCloseButtons = document.querySelectorAll('.close-student-button');
                getCloseButtons.forEach(closeButton => closeButton.addEventListener('click', (e) => {
                    const closeStudentCard = e.target.parentElement.parentElement;
                    const getStudentName = closeStudentCard.querySelector('.student-name').innerHTML;
                    confirm(`Are you sure you wish to remove ${getStudentName}`) == true ? closeStudentCard.remove() : '';
                    
                }))
            }

            function readMoreAboutMe() {
                const getAllAboutMe = document.querySelectorAll('.about-me-description');
                getAllAboutMe.forEach(aboutMe => aboutMe.addEventListener('click', (e) => {
                    const getTarget = e.target;
                    getTarget.classList.toggle('showMore');
                }))
            }

            function openCourse() {
                const getAllCurrentCourses = document.querySelectorAll('.arrow');
                getAllCurrentCourses.forEach(currentCourse => currentCourse.addEventListener('click', (e) => {
                    const getTarget = e.target.parentElement.parentElement;
                    const arrow = e.target
                    arrow.classList.toggle('rotate-arrow');
                    const details = getTarget.querySelector('.hide-course-details');
                    details.classList.toggle('show-course-details');
                }))
            }
      
            closeStudent();
            readMoreAboutMe();
            openCourse();

      })
      .catch(error => {
          alert("data not received");
      })


  }
  

  getAPIData();
  






        
