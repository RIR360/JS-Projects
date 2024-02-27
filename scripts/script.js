/* "data" is available that contains all the task */

function renderCard(data) {

    let { id, title, brief } = data;

    return `
    <div class="col-md-4 fade-in">
        <div onclick="loadProjects(${id})" class="card border pointer">
            <img src="./images/js-banner.png" alt="">
            <div class="card-body">
                <h4>${title}</h4>
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

function renderDetails(data) {

    let { id, title, brief, tasks } = data;
    let $project_id = $("#project-id");

    $project_id.html("> Project " + id);

    return `
    <div class="col fade-in">
        <h3>${title}</h3>
        <p class="">${brief}</p>
        <pre> ${JSON.stringify(tasks, null, 2)} </pre>
    </div>
    `;
    
}

function loadProjects(id) {

    let $project_id = $("#project-id");
    let $projects_container = $("#projects-container");

    // remove the previous content
    $projects_container.html("");
    $project_id.html("");

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