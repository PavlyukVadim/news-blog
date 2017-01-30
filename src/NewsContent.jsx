import React, { Component } from 'react';

import NewsCard from './NewsCard.jsx';
import './grid.scss';



var NEWS = [
    {
        id: 1,
        title: 'Не вставляйте в консоль скопированный из Интернета код!',
        describe: 'Когда нам нужно быстро найти, как решить какую-то задачу в консоли, мы обычно не задумываясь копируем нужные команды и вставляем их в терминал.',
        image: 'https://tproger2.azureedge.net/wp-content/uploads/2017/01/linux-console-300x105.jpg',
        views: 127,
        date: '21.01.2017'
    },
    {
        id: 2,
        title: 'Долгожители в сфере IT: самая старая из действующих программ и другие ветераны вычислительного труда',
        describe: 'Держать ПО в должном состоянии в течение даже нескольких лет без постоянных обновлений практически невозможно. ',
        image: 'https://tproger2.azureedge.net/wp-content/uploads/2017/01/cobol.png',
        views: 45,
        date: '01.01.2010'
    },
    {
        id: 3,
        title: 'Гаджеты, которые мы ждём в 2017 году',
        describe: 'Новому году — новые гаджеты! Некоторые технологические новинки уже официально анонсированы, о других пока ходят только слухи, а пользователи с нетерпением ждут и первых, и вторых.',
        image: 'https://tproger2.azureedge.net/wp-content/uploads/2017/01/gadgets-2017-770.jpg',
        views: 78,
        date: '30.02.2017'
    },
    {
        id: 4,
        title: 'Задача на перегрузку функций в C++, которая может оказаться сложнее, чем выглядит',
        describe: 'Предположим, у нас есть два класса:... ',
        image: 'https://tproger2.azureedge.net/wp-content/uploads/2017/01/i2NKb_croper_ru.jpeg',
        views: 452,
        date: '12.05.2016'
    }

];





class NewsContent extends Component {
	constructor(props) {
	    super(props);
	    this.news = NEWS;
	    this.state = { sortBy: this.props.sortBy };
  	}

	render() {
		console.log(this.props.getTypeSort());
		let news = this.news.map((news) => {
			return <NewsCard key={news.id} info={news} />
		});

		return (
			<div className="grid">
				{ news } 
		    </div>
		);
  	}


}

export default NewsContent;
