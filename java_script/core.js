const inpWrapper = document.querySelector('.input-wrapper');
let counter = 3;

document.querySelector('[data-add]').addEventListener('click', () => {
    counter++;
    const html =    
    `<div class="input-container">
        <input placeholder="${counter} Subject name" type="text">
        <div class="input"><h3>Grades:</h3><input placeholder="3.33" data-grd data-grades-${counter} type="number"></div>
        <div class="input"><h3>Credits:</h3><input placeholder="3" data-crd data-credits-${counter} type="number"></div>            
    </div>`;
    inpWrapper.insertAdjacentHTML('beforeend', html);
});

document.querySelector('[data-calc]').addEventListener('click', () => {
    let resFirst = 0, resSecond = 0;
    for (let i = 1; i <= inpWrapper.children.length; i++) {
        const grd = document.querySelector(`[data-grades-${i}]`);
        const crd = document.querySelector(`[data-credits-${i}]`);
        resFirst += Number(grd.value) * Number(crd.value);
        resSecond += Number(crd.value);
    };
    const resFinal = resFirst/resSecond;
    document.querySelector('#res').textContent = `Result: ${resFinal.toFixed(2)} GPA`;
});
