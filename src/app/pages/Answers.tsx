import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Answer {
  id: number;
  question: string;
  answer: string;
}

interface DateEntry {
  id: number;
  date: string;
  file: string;
  answers: Answer[];
}

const dateEntries: DateEntry[] = [
  {
    id: 11,
    date: "17.03.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 25  , 
      question: "Задание 1", 
      answer: '<a href="/files/tmtools.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">задание по TM tools</a>' 
    },
    { 
      id: 26, 
      question: "Задание 2",  
      answer: '<a href="/files/32pred.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения 1-32</a> быть готовыми воспроизвести устно и письменно;' 
    },
    { 
      id: 27  , 
      question: "Задание 3 Неправильные Глаголы", 
      answer: '<a href="/files/badgl.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Неправильные глаголы</a> знать (перевод, написание, произношение);' 
    }
    ],
  },
  {
    id: 10,
    date: "12.03.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 22, 
      question: "Задание 1",  
      answer: 'в <a href="/files/1003rac.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">таблицу по инстументам ТМ</a>в тетради вносим информацию из <a href="/files/1203tm.docx" class="text-blue-400 hover:text-blue-300 underline">презентации по техникам ТМ</a>;' 
    },
    { 
      id: 23, 
      question: "Задание 2",  
      answer: '<a href="/files/32pred.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения 1-32</a> быть готовыми воспроизвести устно и письменно;' 
    },
    { 
      id: 24  , 
      question: "Задание 3 Неправильные Глаголы", 
      answer: '<a href="/files/badgl.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Неправильные глаголы</a> знать (перевод, написание, произношение);' 
    }
    ],
  },
  {
    id: 9,
    date: "10.03.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 19, 
      question: "Задание 1",  
      answer: '<a href="/files/1003sem.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">7 предложений</a> письменно (выписываем слева полные предложения, справа перевод, подчеркиваем основы в каждом предложении, понимаем, что делаем) - разберем в классе, это продолжение предложений 1-25, которые нужно знать (лучше писать в одном месте, чтобы потом не искать);' 
    },
    { 
      id: 20, 
      question: "Задание 2",  
      answer: 'делаем <a href="/files/1003rac.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">таблицу по инстументам ТМ</a>переносим всю информацию себе в тетрадь; пересматриваем видео RAC - часть Change - и заполняем последний столбик последней строчки самостоятельно - в классе разберем);' 
    },
    { 
      id: 21  , 
      question: "Задание 3 Неправильные Глаголы", 
      answer: '<a href="/files/badgl.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Неправильные глаголы</a> знать (перевод, написание, произношение);' 
    }
    ],
  },
  {
    id: 8,
    date: "05.03.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 15, 
      question: "Задание 1 ", 
      answer: '<a href="/files/0503past.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Past Perfect Continuous</a> письменно (выписываем слева полные предложения, справа перевод, подчеркиваем основы в каждом предложении, понимаем, что делаем);' 
    },
    { 
      id: 16, 
      question: "Задание 2",  
      answer: 'текст <a href="/files/0503goal.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">goal setting</a> читать и отвечать на вопросы (выписать все неизсвестные слова: слово, транскрипция, перевод). Вопросы после текста - устно, если что-то надо записать в тетрадь - пишите' 
    },
    { 
      id: 17, 
      question: "Задание 3",  
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь, выучить туда-сюда корочеч' 
    },
    { 
      id: 18, 
      question: "Задание 4 Неправильные Глаголы", 
      answer: '<a href="/files/badgl.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Неправильные глаголы</a> знать (перевод, написание, произношение);' 
    }
    ],
  },
  {
    id: 7 ,
    date: "03.03.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 11, 
      question: "Задание 1",  
      answer: '<a href="/files/030326.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Past Un 5 - ex.1,2</a>  письменно (выписываем слева полные предложения, справа перевод, подчеркиваем основы в каждом предложении, понимаем, что делаем);' 
    },
    { 
      id: 12, 
      question: "Задание 2",  
      answer: 'структурировать <a href="/files/0303time.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">материал по теме time audit</a> (таблицу на проверку - от руки);' 
    },
    { 
      id: 13, 
      question: "Задание 3",  
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь, выучить туда-сюда корочеч' 
    },
    { 
      id: 14, 
      question: "Задание 4 Неправильные Глаголы", 
      answer: '<a href="/files/badgl.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Неправильные глаголы</a> знать (перевод, написание, произношение);' 
    }
    ],
  },
  {
    id: 6,
    date: "26.02.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 10, 
      question: "Задание",  
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь, выучить туда-сюда корочеч' 
    },
    ],
  },
  {
    id: 5,
    date: "24.02.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 8, 
      question: "Задание",  
      answer: 'Провести аудит времени двух дней (список всех действий в течение дня с указанием времени - на англ языке) Лексика, которая может быть полезной: <a href="/files/drwords.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">words</a> <a href="/files/drt.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">text</a> <a href="/files/drmt.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">text st</a>' 
    },
      { 
      id: 9, 
      question: "Задание",  
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь, выучить туда-сюда корочеч' 
    }
    ],
  },
  {
    id: 4,
    date: "19.02.2026",
    file: "/files/answ.jpg",
    answers: [
      { 
      id: 7, 
      question: "Задание",  
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь, выучить туда-сюда корочеч' 
    },
    ],
  },
  {
    id: 3,
    date: "17.02.2026",
    file: "/files/answ.jpg",
    answers: [
        { 
        id: 4, 
        question: "Задание", 
        answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь' 
      },
    { 
      id: 5, 
      question: "Задание 2 text", 
      answer: '<a href="/files/1702text.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Текст</a> (1часть) прочитать, выписать неизвестные слова, быть готовыми ответить устно на вопросы;' 
    },
    { 
      id: 6, 
      question: "Задание 3 Неправильные Глаголы", 
      answer: '<a href="/files/badgl.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Неправильные глаголы</a> знать (перевод, написание, произношение);' 
    }
    ],
  },
  {
    id: 2,
    date: "12.02.2026(Аналогичное 10.02.2026)",
    file: "/files/answ.jpg",
  answers: [
    { 
      id: 1, 
      question: "Задание", 
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь' 
    }
  ]
  },
  {
  id: 1,
  date: "10.02.2026",
  file: "/files/answ.jpg",
  answers: [
    { 
      id: 1, 
      question: "Задание", 
      answer: '<a href="/files/100226.docx" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Предложения</a> переписать в тетрадь' 
    }
  ]
}
];

export function Answers() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-2">
        {dateEntries.map((entry) => (
          <div key={entry.id} className="border border-gray-800 rounded">
            <button
              onClick={() => setSelectedDate(selectedDate === entry.id ? null : entry.id)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-900 transition-colors"
            >
              <span className="text-white flex items-center gap-3">
                {entry.date}
                <a 
                  href={entry.file} 
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  Скачать
                </a>
              </span>
              <ChevronRight
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  selectedDate === entry.id ? "rotate-90" : ""
                }`}
              />
            </button>
            
            {selectedDate === entry.id && (
              <div className="border-t border-gray-800 px-6 py-4 space-y-3">
                {entry.answers.map((answer) => (
                  <div key={answer.id} className="py-2">
                    <p className="text-gray-400 text-sm mb-1">{answer.question}</p>
                   <p 
                    className="text-white"
                    dangerouslySetInnerHTML={{ 
                      __html: answer.answer 
                    }} 
                  />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}