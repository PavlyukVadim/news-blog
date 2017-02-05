import { connect } from 'react-redux';
import NewsContent from '../components/NewsContent';


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
        title: 'Долгожители в сфере IT: самая старая из действующих программ',
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
        title: 'Задача на перегрузку функций в C++, которая может оказаться сложнее',
        describe: 'Предположим, у нас есть два класса:... ',
        image: 'https://tproger2.azureedge.net/wp-content/uploads/2017/01/i2NKb_croper_ru.jpeg',
        views: 452,
        date: '12.05.2016'
    }

];


const sortByDate = (a, b) => {
    var d1 = Date.parse(a.date.split('.').reverse().join('-'));
    var d2 = Date.parse(b.date.split('.').reverse().join('-'));
    return d2 - d1;
}

function sortByPopular(a, b) {
    return b.views - a.views;
}

const sortByAlphabet = (a, b) => {
    return a.title.localeCompare(b.title);
}


const getSortedNews = (sortBy) => {
    switch (sortBy) {
        case 'FILTER_DATE': return [].concat( NEWS.sort(sortByDate) );
        case 'FILTER_POPULAR': return [].concat( NEWS.sort(sortByPopular) );
        case 'FILTER_ALPHABET': return [].concat( NEWS.sort(sortByAlphabet) );
        default : return NEWS.sort(sortByDate);
  }
}


const mapStateToProps = (state) => {
  return {
    news: getSortedNews(state.visibilityFilter),
    type: 'blog'
  }
}


const BlogContainer = connect(
    mapStateToProps
)(NewsContent)

export default BlogContainer;