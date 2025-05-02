function createMenuItem(name, description, price) {
    const row = document.createElement('tr');
  
    const nameCell = document.createElement('th');
    nameCell.setAttribute('scope', 'row');
    nameCell.textContent = name;
  
    const descCell = document.createElement('td');
    descCell.textContent = description;
  
    const priceCell = document.createElement('td');
    priceCell.textContent = price;
  
    row.append(nameCell, descCell, priceCell);
    return row;
  }
  
  function loadMenu() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    const menuTable = document.createElement('table');
    const tableCaption = document.createElement('caption');
    tableCaption.textContent = 'В нашем специальном меню представлены блюда, где лук играет главную роль, даря вам незабываемые вкусовые ощущения:';
  
    const tableBody = document.createElement('tbody');
  
  
    const menuItems = [
      { name: 'Луковые крокеты', description: 'Нежная начинка из лука, сыра и зелени в хрустящей панировке. Идеальная закуска!', price: '2.300₽' },
      { name: 'Луковый крем-суп', description: 'Ароматный суп из карамелизированного лука с нежными специями. Согревающий и насыщенный вкус.', price: '1.500₽' },
      { name: 'Луковые оладьи', description: 'Традиционные оладьи с начинкой из лука, грибов и зелени. Подаются со сметаной.', price: '1.750₽' },
      { name: 'Луковый тарт', description: 'Хрустящая основа с нежной луковой начинкой, покрытая сливочным соусом и свежей зеленью.', price: '1.200₽' },
      { name: 'Луковый бургер', description: 'Сочный бургер с луковой котлетой, овощами и фирменным луковым соусом.', price: '2.400₽' },
      { name: 'Паста с луком', description: 'Паста аль денте с карамелизированным луком, чесноком и пикантными нотками. Просто и вкусно.', price: '1.850₽' }
    ];
  
  
    menuItems.forEach(item => {
      const row = createMenuItem(item.name, item.description, item.price);
      tableBody.append(row);
    });
  
    menuTable.append(tableCaption, tableBody);
    container.append(menuTable);
  }
  
  export { loadMenu };
  