function Project({src}) {
  return (
    <div class="project">
        <div class="project__image">
            <img src={src} alt="forest" />
            <span>Landing Page</span>
            <h3>Project Name</h3>
        </div>
            <div class="project__text">
            <p>Создаем прибыльные интернет-магазины, маркетплейсы</p>
        </div>
    </div>
  );
}

export default Project;
