import {
  daysOfWeekEng,
  daysOfWeekRus,
  daysOfWeekBel,
  monthsEng,
  monthsRus,
  monthsBel,
} from '../utils/dateStuff';

const date = new Date();
const dayNumber = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const dayEng = daysOfWeekEng[dayNumber];
const dayRus = daysOfWeekRus[dayNumber];
const dayBel = daysOfWeekBel[dayNumber];

const monthEng = monthsEng[month];
const monthRus = monthsRus[month];
const monthBel = monthsBel[month];

const englishContent = {
  navbar: {
    homeLink: 'Home',
    poetsListLink: 'Poets List',
  },
  languagePicker: 0,
  home: {
    portalDescription: {
      topSectionHeader: 'Belarusian Poetry Portal',
      aboutSectionHeader:
        'Find info about your favorite belarusian poets with ease !',
      usedTechnologies: 'Portal Uses',
      openSourceSectionHeader:
        'All the code is open source and available on the GitHub',
      openSourceSectionButton: 'Jump Into Sources!',
    },
    poetOfTheDay: {
      poetOfTheDayCardTitle: 'Author Of The Day',
      curDateTitle: `${monthEng} ${dayNumber}, ${dayEng} ${year}`,
      learnMoreBtn: 'Learn More',
    },
    developersList: {
      developersListHeader: 'Project was created by the team of four developers',
      developers: [
        {
          name: 'Aliaksandr',
          surname: 'Kavalenka',
        },
        {
          name: 'Aleksandr',
          surname: 'Piskun',
        },
        {
          name: 'Ihar',
          surname: 'Baranau',
        },
        {
          name: 'Ekaterina',
          surname: 'Lysiuk',
        },
      ],
    },
  },
  poetsListBlock: {
    poetsListSearchLabel: 'Search poet',
    poetCardLearnMore: 'Learn more',
  },
};

const russianContent = {
  navbar: {
    homeLink: 'Главная',
    poetsListLink: 'Список поэтов',
  },
  languagePicker: 1,
  home: {
    portalDescription: {
      topSectionHeader: 'Портал Белорусской Поэзии',
      aboutSectionHeader:
        'Ищите информацию о любимом белорусском поэте с лёгкостью!',
      usedTechnologies: 'Портал использует',
      openSourceSectionHeader:
        'Исходный код находится в открытом доступе и доступен на GitHub',
      openSourceSectionButton: 'Заглянуть в исходники!',
    },
    poetOfTheDay: {
      poetOfTheDayCardTitle: 'Автор дня',
      curDateTitle: `${monthRus} ${dayNumber}, ${dayRus} ${year}`,
      learnMoreBtn: 'Узнать больше',
    },
    developersList: {
      developersListHeader:
        'Над проектом работала команда из четырех разработчиков',
      developers: [
        {
          name: 'Александр',
          surname: 'Коваленко',
        },
        {
          name: 'Александр',
          surname: 'Пискун',
        },
        {
          name: 'Игорь',
          surname: 'Баранов',
        },
        {
          name: 'Екатерина',
          surname: 'Лысюк',
        },
      ],
    },
  },
  poetsListBlock: {
    poetsListSearchLabel: 'Найти поэта',
    poetCardLearnMore: 'Узнать больше',
  },
};

const belarusianContent = {
  navbar: {
    homeLink: 'Галоўная',
    poetsListLink: 'Спіс паэтаў',
  },
  languagePicker: 2,
  home: {
    portalDescription: {
      topSectionHeader: 'Партал Беларускай Паэзіі',
      aboutSectionHeader:
        'Шукайце інфармацыю пра любімага беларускага паэта з лёгкасцю!',
      usedTechnologies: 'Партал выкарыстоўвае',
      openSourceSectionHeader:
        'Зыходны код знаходзiцца ў адкрытым доступе і даступны на GitHub',
      openSourceSectionButton: 'Зазірнуць у зыходнікі!',
    },
    poetOfTheDay: {
      poetOfTheDayCardTitle: 'Аўтар Дня',
      curDateTitle: `${monthBel} ${dayNumber}, ${dayBel} ${year}`,
      learnMoreBtn: 'Даведацца больш',
    },
    developersList: {
      developersListHeader:
        'Над праектам працавала каманда з чатырох распрацоўшчыкаў',
      developers: [
        {
          name: 'Аляксандр',
          surname: 'Каваленка',
        },
        {
          name: 'Аляксандр',
          surname: 'Пiскун',
        },
        {
          name: 'Iгар',
          surname: 'Баранаў',
        },
        {
          name: 'Кацярына',
          surname: 'Лысюк',
        },
      ],
    },
  },
  poetsListBlock: {
    poetsListSearchLabel: 'Знайсцi паэта',
    poetCardLearnMore: 'Даведацца больш',
  },
};

export default {
  english: englishContent,
  russian: russianContent,
  belarusian: belarusianContent,
};
