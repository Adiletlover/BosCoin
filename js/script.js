const data = [
  {
    label: [
      'Стейкинг (15%): 75 миллионов токенов',
      'Эта доля токенов будет предназначена для вознаграждения участников, которые блокируют свои токены и активно участвуют в обеспечении безопасности сети через стейкинг. Это способствует укреплению долгосрочного интереса и стабильности сети.',
    ],
    value: 30,
  },
  {
    label: [
      'Стейкинг (15yuni%): 75 миллионов токенов',
      'Эта доля токенов будет предназначена для вознаграждения участников, которые блокunjifvtgyируют свои тов обеспечении безопасности сети через стейкинг. Это способствует укреплению долгосрочного интереса и стабильности сети.',
    ],
    value: 40,
  },
  {
    label: [
      'Стейкинг (15%окенов',
      'Эта доля токенов будет предназначена для вознаграждения участников, которые блокируют свои токены и аки сети через стейкинг. Это способствует укреплению долгосрочного интереса и стабильности сети.',
    ],
    value: 30,
  },
];

const width = 400;
const height = 400;

const radius = Math.min(width, height) / 2;

const svg = d3
  .select('#chart-container')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

const arc = d3
  .arc()
  .innerRadius(radius * 0.4)
  .outerRadius(radius * 0.7)
  .cornerRadius(15);

const color = d3
  .scaleOrdinal()
  .domain(data.map((d) => d.label))
  .range(d3.schemeCategory10);

const tooltip = d3
  .select('#chart-container')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 1);

tooltip.html(`
      <h2>${data[0].label[0]} </div></h2>
      <p>${data[0].label[1]}</p>
  `);

const pie = d3
  .pie()
  .sort(null)
  .value((d) => d.value)
  .padAngle(0.02);

const path = svg
  .selectAll('path')
  .data(pie(data))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', (d) => color(d.data.label))
  .on('click', function (event, d) {
    tooltip.transition().duration(200).style('opacity', 0.9);
    tooltip.html(`
          <h2>${d.data.label[0]}</h2>
          <p>${d.data.label[1]}</p>
          `);
  })
  .on('mouseout', function (d) {});

const activeYear = document.querySelectorAll('.BosCoinLaunch_years_year');
const qsBlocks = document.querySelector('.BosCoinLaunch_QsBlocks');
const years = document.querySelectorAll('.BosCoinLaunch_years_year');
const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');

function setActiveYear(event) {
  activeYear.forEach((year) => {
    year.classList.remove('active');
  });

  event.target.classList.add('active');
}

activeYear.forEach((year) => {
  year.addEventListener('click', setActiveYear);
});

if (window.screen.width < '900px') {
  years.forEach((year, index) => {
    year.addEventListener('click', () => {
      const offset = -index * 200;

      qsBlocks.style.transform = `translateX(${offset}%)`;

      years.forEach((year) => year.classList.remove('active'));
      year.classList.add('active');
    });
  });
}
years.forEach((year, index) => {
  year.addEventListener('click', () => {
    const offset = -index * 80;

    qsBlocks.style.transform = `translateX(${offset}%)`;

    years.forEach((year) => year.classList.remove('active'));
    year.classList.add('active');
  });
});
mobileMenuIcon.addEventListener('click', () => {
  modal.style.right = '0';
  mobileMenuIcon.classList.add('close');
});

modalClose.addEventListener('click', () => {
  modal.style.right = '-100%';
  mobileMenuIcon.classList.remove('close');
});
