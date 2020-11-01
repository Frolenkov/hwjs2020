function Benefit({title, counter}) {
  return (
    <div class="benefit">
      <div class="benefit__counter">
        <span>{`${counter}+`}</span>
      </div>
      <div class="benefit__text">
        <span class="benefit__title">{title}</span>
        <p>Создаем прибыльные интернет-магазины, маркетплейсы</p>
      </div>
    </div>
  );
}

export default Benefit;
