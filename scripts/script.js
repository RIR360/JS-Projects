/* "data" is available that contains all the task */

function renderCard(data) {

    let { id, title, brief } = data;

    return `
    <div class="col-md-6 fade-in">
        <div onclick="loadProjects(${id})" class="card border pointer">
            <img src="./images/js-banner.png" alt="Project feature image">
            <div class="card-body">
                <h5>${title}</h5>
                <p class="card-text">${brief}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-sm btn-warning">Open Project</button>
                    <small class="text-success">Easy</small>
                </div>
            </div>
        </div>
    </div>
    `;
    
}

function renderTask(data) {

    let { id, name, image } = data;

    return `
        <div class="task-item card bg-yellow p-2">
            <label class="pointer" for="task-${id}">
                <div class="d-flex">
                    <input class="form-check me-2" type="checkbox" name="" id="task-${id}">
                    <strong>Task ${id}</strong>
                </div>
                <span>${name}</span>
                <div class="rounded mt-2 overflow-hidden">
                    <img src="./images/${image}" alt="Task preview image" width="100%">
                </div>
            </label>
        </div>
    `;
    
}

function renderDetails(data) {

    let { id, title, brief, tasks } = data;
    let $project_id = $("#project-id");
    let all_rendered_tasks = "";

    $project_id.html("> Project " + id);

    tasks.forEach((obj, idx) => {

        all_rendered_tasks += renderTask({
            id: idx + 1,
            name: obj.task,
            image: obj.preview || "js-banner.png"
        })
        
    });

    return `
    <div class="col fade-in">
        <button class="btn btn-sm btn-outline-secondary mb-3" onclick="loadProjects()">Go back</button>
        <h3>${title}</h3>
        <p class="">${brief}</p>
        <div class="row g-3">${all_rendered_tasks}</div>
    </div>
    `;
    
}

function loadProjects(id) {

    let $project_id = $("#project-id");
    let $projects_container = $("#projects-container");

    // remove the previous content
    $projects_container.html("");
    $project_id.html("");

    // take user to the top
    document.body.scrollTop = 0;

    if (id) {

        // load single content
        let project = data.find(o => o.id === id);
        $projects_container.html(renderDetails(project));

    } else {

        // load all the content
        data.forEach(project => {

            $projects_container.append(renderCard(project));
    
        });

    }
    
}

window.onload = (e) => {

    loadProjects();

}