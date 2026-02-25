// 1. getElementById - Title 
        const title = document.getElementById('todo-title');

        // 2. getElementsByClassName 
        const allTasks = document.getElementsByClassName('task');
        allTasks[0].style.borderLeft = "5px solid blue";

        // 3. querySelector 
        const myBtn = document.querySelector('#btn');

        // 4. querySelectorAll - 'done'
        myBtn.addEventListener('click', () => {
            const completed = document.querySelectorAll('.done');
            completed.forEach(task => {
                task.classList.toggle('highlight');
            });
            title.innerText = "Tasks Highlighted!";
        });