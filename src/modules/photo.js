const photo = () => {
    let commandPhoto = document.querySelectorAll('.command__photo');
        commandPhoto.forEach((e) => {
        let img = e.src;
        e.addEventListener('mouseover', (e) => {
        e.target.src = e.target.dataset.img;
        });
        e.addEventListener('mouseout', () => {
            e.src = img;
        });
    });
};

export default photo;
