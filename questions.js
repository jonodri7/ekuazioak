// ===== BANCO DE PREGUNTAS — MATE GALDERAK =====
// 280 preguntas de ecuaciones para 3º DBH/ESO
// Basadas en el estilo de los PDFs del profesor
// Formato: id, tema, dificultad, enunciado (euskera), solucion

const QUESTIONS_BANK = [

  // ════════════════════════════════════════════════════════
  // LEHENENGO MAILAKO EKUAZIOAK — ERRAZA (34 galdera, 1-34)
  // ════════════════════════════════════════════════════════

  { id:1,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4(x-1) - 15 = 3(x-1)", solucion:"x=16" },
  { id:2,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5(x-2) - 8 = 4(x-2)", solucion:"x=10" },
  { id:3,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3(x-4) - 2 = 2(x-3)", solucion:"x=8" },
  { id:4,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 6(x-3) - 5 = 5(x-2)", solucion:"x=13" },
  { id:5,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 7(x-1) - 6 = 6(x-1)", solucion:"x=7" },
  { id:6,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3(x+2) - 4 = 2(x+3)", solucion:"x=4" },
  { id:7,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5(x+1) - 9 = 4(x+2)", solucion:"x=12" },
  { id:8,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4(x+3) - 7 = 3(x+5)", solucion:"x=10" },
  { id:9,  tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 6(x+1) - 5 = 5(x+2)", solucion:"x=9" },
  { id:10, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 7(x+2) - 3 = 6(x+1)", solucion:"x=-5" },
  { id:11, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3(2-3x) - 4(x-5) = 6x - 25", solucion:"x=51/19" },
  { id:12, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 2(3-2x) - 3(x-4) = 5x - 20", solucion:"x=19/6" },
  { id:13, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4(1-x) - 2(x-3) = 3x - 5", solucion:"x=5/3" },
  { id:14, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5(1-2x) - 3(x-2) = 4x - 11", solucion:"x=22/17" },
  { id:15, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 2(4-3x) + 4(x+2) = 3x + 6", solucion:"x=2" },
  { id:16, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-13) = 4[3x - 4(x-2)]", solucion:"x=9" },
  { id:17, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-5) = 3[2x - 3(x-1)]", solucion:"x=7/2" },
  { id:18, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-7) = 2[4x - 5(x-1)]", solucion:"x=17/3" },
  { id:19, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x+3) = 5[2x - 3(x+1)]", solucion:"x=-3" },
  { id:20, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x+8) = 3[x - 2(x-4)]", solucion:"x=4" },
  { id:21, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-3)² - (x+1)(x-1) = 3", solucion:"x=7/6" },
  { id:22, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-2)² - (x+3)(x-3) = 5", solucion:"x=2" },
  { id:23, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-1)² - (x-2)(x+2) = 4", solucion:"x=1/2" },
  { id:24, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-4)² - (x+2)(x-2) = 8", solucion:"x=3/2" },
  { id:25, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x+1)² - (x-2)(x+2) = 2", solucion:"x=-3/2" },
  { id:26, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3(x-2) - 5(x+1) + 4x = 7", solucion:"x=9" },
  { id:27, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5(x+1) - 3(x-2) + 2x = 14", solucion:"x=3/4" },
  { id:28, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 2(3x+1) - 4(x-3) = 3(x+5)", solucion:"x=-1" },
  { id:29, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5(x-4) + 3(x+2) = 2(3x-7)", solucion:"x=0" },
  { id:30, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 6(x+2) - 2(3x-1) = 4x + 5", solucion:"x=9/4" },
  { id:31, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (x-2)² + 3 = (x-1)(x-2)", solucion:"x=5" },
  { id:32, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (2x-1)² - (2x+3)(2x-3) = 6", solucion:"x=1" },
  { id:33, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: (3x-2)² - (3x-1)(3x+1) = 3", solucion:"x=1/6" },
  { id:34, tema:"Lehenengo mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4(x-2) - 3(x+1) = 2(x-5)", solucion:"x=-1" },

  // ════════════════════════════════════════════════════════
  // LEHENENGO MAILAKO EKUAZIOAK — ERTAINA (33 galdera, 35-67)
  // ════════════════════════════════════════════════════════

  { id:35, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/2 - x/3 = 5", solucion:"x=30" },
  { id:36, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/3 + x/4 = 7", solucion:"x=12" },
  { id:37, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 3x/4 - x/7 = 73 - 2x", solucion:"x=28" },
  { id:38, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/2 - x/5 = 6", solucion:"x=20" },
  { id:39, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x/3 - x/4 = 7", solucion:"x=84/5" },
  { id:40, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 3x/5 - x/3 = 4", solucion:"x=15" },
  { id:41, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/3 + x/6 = 3", solucion:"x=6" },
  { id:42, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x/5 - x/4 = 3", solucion:"x=20" },
  { id:43, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+1)/2 - (x-1)/3 = 2", solucion:"x=7" },
  { id:44, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-2)/3 + (x+1)/4 = 3", solucion:"x=41/7" },
  { id:45, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-3)/4 + (x+2)/3 - (x-1)/6 = 4", solucion:"x=47/5" },
  { id:46, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+1)/4 + (x+2)/6 = 2", solucion:"x=17/5" },
  { id:47, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (2x-3)/4 + (x+1)/4 = 2", solucion:"x=10/3" },
  { id:48, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/3 - x/7 = 8/21", solucion:"x=2" },
  { id:49, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/5 + x/7 = 12/35", solucion:"x=1" },
  { id:50, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x/3 - x/6 = 1/2", solucion:"x=1" },

  // — BLOKE 1 GORDETAKO PUNTUA (50 galdera) —

  { id:51, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+4)/3 + (x-2)/6 = 5", solucion:"x=8" },
  { id:52, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (2x-1)/3 + (x+2)/5 = 3", solucion:"x=44/13" },
  { id:53, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (3x+2)/5 - (x-1)/3 = 1", solucion:"x=1" },
  { id:54, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+3)/2 + (2x-1)/3 = x + 4", solucion:"x=17" },
  { id:55, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (3x-1)/6 - (x+2)/4 = 1", solucion:"x=20/3" },
  { id:56, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/4 - x/6 = x - 4", solucion:"x=48/11" },
  { id:57, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 3x/8 + x/4 = x + 2", solucion:"x=-16/3" },
  { id:58, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (1/2)x + (1/3)x = 5", solucion:"x=6" },
  { id:59, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (1/3)x - (1/4)x = 2", solucion:"x=24" },
  { id:60, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x - (2x-1)/3 + x/5 = 5", solucion:"x=35/4" },
  { id:61, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-3)/4 + (x+2)/3 = 5", solucion:"x=61/7" },
  { id:62, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (2x+1)/5 - (x-2)/3 = 1", solucion:"x=2" },
  { id:63, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/6 + (x+3)/4 = 5/12", solucion:"x=-4/5" },
  { id:64, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/2 - (x+3)/4 + 1/4 = x - 5", solucion:"x=6" },
  { id:65, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-1)/2 + (x+1)/4 = x - 1", solucion:"x=3" },
  { id:66, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x/2 + x/3 = 2x - 7", solucion:"x=6" },
  { id:67, tema:"Lehenengo mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (3x-1)/4 - (2x+3)/6 + (x-2)/3 = 2", solucion:"x=41/9" },

  // ════════════════════════════════════════════════════════
  // LEHENENGO MAILAKO EKUAZIOAK — ZAILA (33 galdera, 68-100)
  // ════════════════════════════════════════════════════════

  { id:68, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 2(x-1)/3 - 3(x-2)/4 = 4(x-3)/5 - 3/10", solucion:"x=4" },
  { id:69, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (3x-17)/8 - (1-4x)/12 = (1-x)/4 - (9+x)/6", solucion:"x=23/27" },
  { id:70, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-1)² - (x+1)² = 2x(x-3) - 2x² + 2", solucion:"x=1" },
  { id:71, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-1)²/2 - (2x+1)²/3 = (x+2)(x-2)/2 - 4x²/3", solucion:"x=13/14" },
  { id:72, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x-1)²/4 - (3x+1)²/9 = 1/6", solucion:"x=-1/60" },
  { id:73, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x/2 + x/3 + x/4 = 13", solucion:"x=12" },
  { id:74, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x/3 + x/5 + x/6 = 9", solucion:"x=90/7" },
  { id:75, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x+1)/2 + (x-2)/3 - (x+3)/6 = 2", solucion:"x=4" },
  { id:76, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x-1)/4 + (x+2)/6 - (x-1)/12 = 3", solucion:"x=34/7" },
  { id:77, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 5x/6 - 2(x+1)/3 + x/4 = 1/2", solucion:"x=14/5" },
  { id:78, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 3x/4 - 2(x-2)/3 + x/6 = 5", solucion:"x=44/3" },
  { id:79, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-2)²/3 - (x+1)(x-1)/3 = 2", solucion:"x=-1/4" },
  { id:80, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x+3)/4 + (x-1)/6 - (x+2)/3 = 1", solucion:"x=13/4" },
  { id:81, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (3x-2)/5 + (2x+1)/4 - (x-3)/20 = 3", solucion:"x=20/7" },
  { id:82, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 2x/3 + x/4 - x/6 = 5", solucion:"x=20/3" },
  { id:83, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x+1)/4 - (x-2)/6 + x/12 = 3", solucion:"x=29/2" },
  { id:84, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x-1)/3 + (x+2)/5 - (2x-3)/15 = 4", solucion:"x=56/11" },
  { id:85, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x/2 - (x+3)/4 + (2x-1)/6 - x/3 = 2", solucion:"x=35/3" },
  { id:86, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-4)² - (x-1)(x+1) = 3", solucion:"x=7/4" },
  { id:87, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x+5)² - (x+3)(x+8) = 2", solucion:"x=-1" },
  { id:88, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (3x-1)² - (3x+2)(3x-2) = 3", solucion:"x=1/3" },
  { id:89, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x+3)² - (2x-1)(2x+1) = 12", solucion:"x=1/6" },
  { id:90, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-2)² - (x+1)² = 5x - 1", solucion:"x=4/11" },
  { id:91, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x/2 - x/3 + x/4 = 7", solucion:"x=84/5" },
  { id:92, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-1)/3 + (x-2)/5 = 3", solucion:"x=7" },
  { id:93, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x/2 - x/3 + x/4 + x/5 = 37/60", solucion:"x=1" },
  { id:94, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-1)/2 + (x-2)/3 + (x-3)/4 = 4", solucion:"x=71/13" },
  { id:95, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 3(2x-1)/4 - 2(x+3)/3 = x - 5/12", solucion:"x=-14" },
  { id:96, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x+1)/6 - (x-2)/3 + (x+1)/4 = 2", solucion:"x=11/3" },
  { id:97, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 4x/3 - 2(x-1)/5 = x - 1/3", solucion:"x=11" },
  { id:98, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 5(x+2)/6 - 3(2x-1)/4 = (x-3)/12 + 2", solucion:"x=8/9" },
  { id:99, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (3x-2)/4 + (x+1)/3 = (2x-1)/6 + 4", solucion:"x=16/3" },
  { id:100, tema:"Lehenengo mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x-3)/5 + (3x+1)/2 = (x+4)/4 + 3", solucion:"x=82/33" },

  // — BLOKE 2 GORDETAKO PUNTUA (100 galdera) —

  // ════════════════════════════════════════════════════════
  // BIGARREN MAILAKO EKUAZIOAK — ERRAZA (34 galdera, 101-134)
  // ════════════════════════════════════════════════════════

  { id:101, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 6x + 8 = 0", solucion:"x₁=4, x₂=2" },
  { id:102, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + x - 12 = 0", solucion:"x₁=3, x₂=-4" },
  { id:103, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 5x + 6 = 0", solucion:"x₁=3, x₂=2" },
  { id:104, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 7x + 10 = 0", solucion:"x₁=5, x₂=2" },
  { id:105, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 2x - 15 = 0", solucion:"x₁=3, x₂=-5" },
  { id:106, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 3x - 10 = 0", solucion:"x₁=5, x₂=-2" },
  { id:107, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 5x + 4 = 0", solucion:"x₁=-1, x₂=-4" },
  { id:108, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 8x + 15 = 0", solucion:"x₁=5, x₂=3" },
  { id:109, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 4x - 21 = 0", solucion:"x₁=3, x₂=-7" },
  { id:110, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 9x + 20 = 0", solucion:"x₁=5, x₂=4" },
  { id:111, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 2x² - 7x + 6 = 0", solucion:"x₁=2, x₂=3/2" },
  { id:112, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3x² - 5x + 2 = 0", solucion:"x₁=1, x₂=2/3" },
  { id:113, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 2x² + 3x - 2 = 0", solucion:"x₁=1/2, x₂=-2" },
  { id:114, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4x² - 8x + 3 = 0", solucion:"x₁=3/2, x₂=1/2" },
  { id:115, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5x² + 14x - 3 = 0", solucion:"x₁=1/5, x₂=-3" },
  { id:116, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 4x = 0  (osatugabea)", solucion:"x₁=0, x₂=-4" },
  { id:117, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 2x = 0  (osatugabea)", solucion:"x₁=0, x₂=-2" },
  { id:118, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5x² + x = 0  (osatugabea)", solucion:"x₁=0, x₂=-1/5" },
  { id:119, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3x² - 6x = 0  (osatugabea)", solucion:"x₁=0, x₂=2" },
  { id:120, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 7x = 0  (osatugabea)", solucion:"x₁=0, x₂=7" },
  { id:121, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² = 9", solucion:"x=±3" },
  { id:122, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² = 25", solucion:"x=±5" },
  { id:123, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4x² = 1", solucion:"x=±1/2" },
  { id:124, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 6 = 10", solucion:"x=±2" },
  { id:125, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 7 = 2", solucion:"x=±3" },
  { id:126, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 2x² = 8", solucion:"x=±2" },
  { id:127, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 9x² = 4", solucion:"x=±2/3" },
  { id:128, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² - 5 = 4", solucion:"x=±3" },
  { id:129, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² + 2 = 11", solucion:"x=±3" },
  { id:130, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 4x² - 9 = 0", solucion:"x=±3/2" },
  { id:131, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 3x² = 27", solucion:"x=±3" },
  { id:132, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: x² = 16", solucion:"x=±4" },
  { id:133, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 5x² = 20", solucion:"x=±2" },
  { id:134, tema:"Bigarren mailako ekuazioak", dificultad:"erraza", enunciado:"Ebatzi: 25x² - 1 = 0", solucion:"x=±1/5" },

  // ════════════════════════════════════════════════════════
  // BIGARREN MAILAKO EKUAZIOAK — ERTAINA (33 galdera, 135-167)
  // ════════════════════════════════════════════════════════

  { id:135, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² - 3x - 5 = 2x + 9", solucion:"x₁=7, x₂=-2" },
  { id:136, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 6x² - 5(x-1) = x(x+1) + 4", solucion:"x₁=1, x₂=1/5" },
  { id:137, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x(x+5) = 6", solucion:"x₁=1, x₂=-6" },
  { id:138, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x(x-4) = 5", solucion:"x₁=5, x₂=-1" },
  { id:139, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x(x+3) = 10", solucion:"x₁=2, x₂=-5" },
  { id:140, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-1)(x+2) = 4", solucion:"x₁=2, x₂=-3" },
  { id:141, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+1)(x-3) = 12", solucion:"x₁=5, x₂=-3" },
  { id:142, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+2)(x+4) = 15", solucion:"x₁=1, x₂=-7" },
  { id:143, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² + 4x = 2x + 8", solucion:"x₁=2, x₂=-4" },
  { id:144, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x² + x = x² + 6", solucion:"x₁=2, x₂=-3" },
  { id:145, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 3x² - x = x² + 10", solucion:"x₁=5/2, x₂=-2" },
  { id:146, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 4x² - 3x = x² + 6", solucion:"x₁=2, x₂=-1" },
  { id:147, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² = 6x - 8", solucion:"x₁=4, x₂=2" },
  { id:148, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² = x + 12", solucion:"x₁=4, x₂=-3" },
  { id:149, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x² = 5x + 3", solucion:"x₁=3, x₂=-1/2" },
  { id:150, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 3x² = 10x - 3", solucion:"x₁=3, x₂=1/3" },

  // — BLOKE 3 GORDETAKO PUNTUA (150 galdera) —

  { id:151, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x(2x-1) = 6", solucion:"x₁=2, x₂=-3/2" },
  { id:152, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (2x+1)(x-3) = 2x - 3", solucion:"x₁=0, x₂=7/2" },
  { id:153, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+2)² = 3x + 10", solucion:"x₁=2, x₂=-3" },
  { id:154, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-3)² = x + 3", solucion:"x₁=6, x₂=1" },
  { id:155, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² = 4x + 5", solucion:"x₁=5, x₂=-1" },
  { id:156, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 4x² = 12x - 9", solucion:"x=3/2 (doble erroa)" },
  { id:157, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² + 2 = 3x", solucion:"x₁=2, x₂=1" },
  { id:158, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x² + x = 3", solucion:"x₁=1, x₂=-3/2" },
  { id:159, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+1)(x+5) = 12", solucion:"x₁=1, x₂=-7" },
  { id:160, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x(x+7) = 8", solucion:"x₁=1, x₂=-8" },
  { id:161, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² - 5x - 6 = 0", solucion:"x₁=6, x₂=-1" },
  { id:162, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 2x² + 5x - 3 = 0", solucion:"x₁=1/2, x₂=-3" },
  { id:163, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: x² - 10x + 25 = 0", solucion:"x=5 (doble erroa)" },
  { id:164, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 4x² + 4x + 1 = 0", solucion:"x=-1/2 (doble erroa)" },
  { id:165, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: 3x² + 2x - 8 = 0", solucion:"x₁=4/3, x₂=-2" },
  { id:166, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x-1)(x-5) = -4", solucion:"x=3 (doble erroa)" },
  { id:167, tema:"Bigarren mailako ekuazioak", dificultad:"ertaina", enunciado:"Ebatzi: (x+3)(x-1) = 5", solucion:"x₁=2, x₂=-4" },

  // ════════════════════════════════════════════════════════
  // BIGARREN MAILAKO EKUAZIOAK — ZAILA (33 galdera, 168-200)
  // ════════════════════════════════════════════════════════

  { id:168, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 2x² + x/4 = x² + 4x/5 + 1/5", solucion:"x₁=4/5, x₂=-1/4" },
  { id:169, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x(x+1) - 1/2 = (x-4)/6", solucion:"x₁=-1/3, x₂=-1/2" },
  { id:170, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x+2)/3 + (x²-x)/5 = (3x+7)/10", solucion:"x₁=1/6, x₂=-1" },
  { id:171, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/2 + x = (2x²-5)/3 - 1", solucion:"x₁=8, x₂=-2" },
  { id:172, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x/2)·(x+1/30) = (x/3)·(x+2/5)", solucion:"x₁=0, x₂=7/10" },
  { id:173, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x/3)·(x-3/4) = (x-1)(x+1)/3 + 1/6", solucion:"x₁=1, x₂=1/2" },
  { id:174, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/4 - x/2 + 1/4 = 0", solucion:"x=1 (doble erroa)" },
  { id:175, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/9 - 2x/3 + 1 = 0", solucion:"x=3 (doble erroa)" },
  { id:176, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/4 + x/2 = 2", solucion:"x₁=2, x₂=-4" },
  { id:177, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/4 + x = 3", solucion:"x₁=2, x₂=-6" },
  { id:178, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/2 - x = 4", solucion:"x₁=4, x₂=-2" },
  { id:179, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/3 + x = 4/3", solucion:"x₁=1, x₂=-4" },
  { id:180, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 3x²/2 - 5x/2 = 1", solucion:"x₁=2, x₂=-1/3" },
  { id:181, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x+1)/2 · (x-1)/2 = 2", solucion:"x=±3" },
  { id:182, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x-1)/2 · (x+3)/2 = 3", solucion:"x₁=3, x₂=-5" },
  { id:183, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (2x+1)/3 · (x-2)/3 = 2", solucion:"x₁=4, x₂=-5/2" },
  { id:184, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x/2)·(x-3) = 2", solucion:"x₁=4, x₂=-1" },
  { id:185, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x/2+1)·(x/2-1) = 3", solucion:"x=±4" },
  { id:186, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (x+3)² = 4x + 9", solucion:"x₁=0, x₂=-2" },
  { id:187, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: (3x-1)² = 3x + 1", solucion:"x₁=0, x₂=1" },
  { id:188, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/3 + x/2 = x²/6 + 2x/3 + 1", solucion:"x₁=3, x₂=-2" },
  { id:189, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/2 + x/6 = 2 - x²/3 - x/2", solucion:"x₁=6/5, x₂=-2" },
  { id:190, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x² + 2x + 5 = 0", solucion:"soluzioa ez dago (diskriminantea < 0)" },
  { id:191, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 2x² - x + 1 = 0", solucion:"soluzioa ez dago (diskriminantea < 0)" },
  { id:192, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 2x²/5 - 3x/10 = 1", solucion:"x₁=2, x₂=-5/4" },
  { id:193, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x(x-9) + 18 = 0", solucion:"x₁=6, x₂=3" },
  { id:194, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x(2x+7) = 4", solucion:"x₁=1/2, x₂=-4" },
  { id:195, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/6 - x/2 + 1/3 = 0", solucion:"x₁=2, x₂=1" },
  { id:196, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/4 - 5x/4 + 1 = 0", solucion:"x₁=4, x₂=1" },
  { id:197, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/6 + x/3 - 1/2 = 0", solucion:"x₁=1, x₂=-3" },
  { id:198, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: 3x²/2 + x/4 - 1/2 = 0", solucion:"x₁=1/2, x₂=-2/3" },
  { id:199, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x²/4 + x/2 - 3/4 = 0", solucion:"x₁=1, x₂=-3" },
  { id:200, tema:"Bigarren mailako ekuazioak", dificultad:"zaila", enunciado:"Ebatzi: x² + 4x + 6 = 0", solucion:"soluzioa ez dago (diskriminantea < 0)" },

  // — BLOKE 4 GORDETAKO PUNTUA (200 galdera) —

  // ════════════════════════════════════════════════════════
  // SISTEMAK — ERRAZA (25 galdera, 201-225)
  // Ordezkapenaren metodoa (sustitución)
  // ════════════════════════════════════════════════════════

  { id:201, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + y = 5\n{ 2x - y = 4", solucion:"x=3, y=2" },
  { id:202, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + y = 7\n{ x - y = 3", solucion:"x=5, y=2" },
  { id:203, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 2x + y = 10\n{ x - y = 2", solucion:"x=4, y=2" },
  { id:204, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + 2y = 7\n{ x - y = 1", solucion:"x=3, y=2" },
  { id:205, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 3x + y = 11\n{ x + y = 5", solucion:"x=3, y=2" },
  { id:206, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + y = 6\n{ 2x + 3y = 16", solucion:"x=2, y=4" },
  { id:207, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 2x - y = 3\n{ x + 2y = 9", solucion:"x=3, y=3" },
  { id:208, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + y = 9\n{ x = 2y", solucion:"x=6, y=3" },
  { id:209, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x - y = 2\n{ x = 3y", solucion:"x=3, y=1" },
  { id:210, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + y = 10\n{ x = y + 4", solucion:"x=7, y=3" },
  { id:211, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 2x + y = 7\n{ x + y = 5", solucion:"x=2, y=3" },
  { id:212, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 4x - y = 10\n{ 2x + y = 8", solucion:"x=3, y=2" },
  { id:213, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + 3y = 10\n{ x - y = 2", solucion:"x=4, y=2" },
  { id:214, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 5x + 2y = 16\n{ 3x + 2y = 12", solucion:"x=2, y=3" },
  { id:215, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + 4y = 14\n{ x + 2y = 8", solucion:"x=2, y=3" },
  { id:216, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 3x + y = 7\n{ 2x - y = 3", solucion:"x=2, y=1" },
  { id:217, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x = 2y - 1\n{ x + y = 8", solucion:"x=5, y=3" },
  { id:218, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 2x = y + 5\n{ x + y = 7", solucion:"x=4, y=3" },
  { id:219, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ y = 3x - 2\n{ 2x + y = 13", solucion:"x=3, y=7" },
  { id:220, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x = y + 4\n{ 2x - y = 9", solucion:"x=5, y=1" },
  { id:221, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 3x = y + 6\n{ x + y = 6", solucion:"x=3, y=3" },
  { id:222, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x + y = 8\n{ x = 3y - 4", solucion:"x=5, y=3" },
  { id:223, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 2y = x + 2\n{ x + y = 7", solucion:"x=4, y=3" },
  { id:224, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ x - 2y = 1\n{ 3x + y = 10", solucion:"x=3, y=1" },
  { id:225, tema:"Sistemak", dificultad:"erraza", enunciado:"Ebatzi ekuazio-sistema:\n{ 2x + 3y = 11\n{ x + y = 4", solucion:"x=1, y=3" },

  // ════════════════════════════════════════════════════════
  // SISTEMAK — ZAILA (25 galdera, 226-250)
  // Murrizketaren / berdinketa metodoa eta osoa
  // ════════════════════════════════════════════════════════

  { id:226, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi murrizketaz:\n{ 2x + 3y = 7\n{ 3x - 2y = 4", solucion:"x=2, y=1" },
  { id:227, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi murrizketaz:\n{ 2x + 5y = 16\n{ 3x - 2y = 5", solucion:"x=3, y=2" },
  { id:228, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi murrizketaz:\n{ 4x + 3y = 17\n{ 4x - 3y = 7", solucion:"x=3, y=5/3" },
  { id:229, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x - 2y = 1\n{ 3x + 4y = 13", solucion:"x=3, y=1" },
  { id:230, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y = 5\n{ 2x + 3y = 13", solucion:"x=2, y=3" },
  { id:231, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi murrizketaz:\n{ 3x + y = 14\n{ 2x - 3y = 2", solucion:"x=4, y=2" },
  { id:232, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 2x + y = 9\n{ 3x - y = 6", solucion:"x=3, y=3" },
  { id:233, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y = 7\n{ 3x - 2y = 1", solucion:"x=3, y=4" },
  { id:234, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 4x - y = 13\n{ x + y = 7", solucion:"x=4, y=3" },
  { id:235, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 3x + 5y = 21\n{ 2x - y = 1", solucion:"x=2, y=3" },
  { id:236, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y = 4\n{ 2x - 3y = 3", solucion:"x=3, y=1" },
  { id:237, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi murrizketaz:\n{ 2x + y = 9\n{ 4x - 3y = 3", solucion:"x=3, y=3" },
  { id:238, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi murrizketaz:\n{ 3x + 2y = 13\n{ x - 2y = -1", solucion:"x=3, y=2" },
  { id:239, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 5x - 3y = 1\n{ 2x + y = 7", solucion:"x=2, y=3" },
  { id:240, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 4x + 5y = 22\n{ x - y = 1", solucion:"x=3, y=2" },
  { id:241, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + 2y = 7\n{ 3x - y = 14", solucion:"x=5, y=1" },
  { id:242, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 2x + 5y = 12\n{ x + 2y = 5", solucion:"x=1, y=2" },
  { id:243, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 3x - y = 1\n{ x + 3y = 17", solucion:"x=2, y=5" },
  { id:244, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 5x + y = 16\n{ x - 2y = 1", solucion:"x=3, y=1" },
  { id:245, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 2x - 3y = -7\n{ x + y = 4", solucion:"x=1, y=3" },
  { id:246, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ 7x - y = 9\n{ x + y = 7", solucion:"x=2, y=5" },
  { id:247, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y = 6\n{ (x+y)/2 = 3  eta  x - y = 2", solucion:"x=4, y=2" },
  { id:248, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y/2 = 5\n{ x - y = 2", solucion:"x=4, y=2" },
  { id:249, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y = 8\n{ 4x + 3y = 30", solucion:"x=6, y=2" },
  { id:250, tema:"Sistemak", dificultad:"zaila", enunciado:"Ebatzi:\n{ x + y = 1\n{ 2x - 3y = 12", solucion:"x=3, y=-2" },

  // — BLOKE 5 GORDETAKO PUNTUA (250 galdera) —

  // ════════════════════════════════════════════════════════
  // BURUKETAK — ERRAZA (15 galdera, 251-265)
  // ════════════════════════════════════════════════════════

  { id:251, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki bat bere hirukoitzarekin biderkatuz 12 ematen duena.", solucion:"x=2 edo x=-2" },
  { id:252, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki bat bere bikoitzarekin biderkatuz 18 ematen duena.", solucion:"x=3 edo x=-3" },
  { id:253, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki bat bere boskoitzarekin biderkatuz 20 ematen duena.", solucion:"x=2 edo x=-2" },
  { id:254, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten karratua 25 da. Zein da zenbakia?", solucion:"x=5 edo x=-5" },
  { id:255, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki bat bere hirukoitzarekin biderkatuz 75 ematen duena.", solucion:"x=5 edo x=-5" },
  { id:256, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki bat bere seikoitzarekin biderkatuz 96 ematen duena.", solucion:"x=4 edo x=-4" },
  { id:257, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki bat bere zazpikoitzarekin biderkatuz 28 ematen duena.", solucion:"x=2 edo x=-2" },
  { id:258, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten karratua, hortik 4 kenduz, 12 ematen du. Zein da zenbakia?", solucion:"x=4 edo x=-4" },
  { id:259, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten bikoitzaren karratua 36 da. Zein da zenbakia?", solucion:"x=3 edo x=-3" },
  { id:260, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten karratua bere bikoitza baino 8 gehiago da. Zein da zenbakia?", solucion:"x=4 edo x=-2" },
  { id:261, tema:"Buruketak", dificultad:"erraza", enunciado:"Bi zenbakiren batura 10 da eta bien biderkadura 21 da. Zein dira?", solucion:"7 eta 3" },
  { id:262, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten karratua eta haren hirukoitzaren batura 10 da. Zein da zenbakia?", solucion:"x=2 edo x=-5" },
  { id:263, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten karratua 49 da. Zein da zenbakia?", solucion:"x=7 edo x=-7" },
  { id:264, tema:"Buruketak", dificultad:"erraza", enunciado:"Bilatu zenbaki positibo bat: bere karratua bere laukoitza baino 5 gehiago da.", solucion:"x=5" },
  { id:265, tema:"Buruketak", dificultad:"erraza", enunciado:"Zenbaki baten eta bere ondokoaren biderkadura 6 da. Zein da zenbakia?", solucion:"x=2 edo x=-3" },

  // ════════════════════════════════════════════════════════
  // BURUKETAK — ZAILA (15 galdera, 266-280)
  // ════════════════════════════════════════════════════════

  { id:266, tema:"Buruketak", dificultad:"zaila", enunciado:"Martinek bi urte gehiago ditu Idoiak baino. Adinen biderkadura 35 da. Zenbat urte ditu bakoitzak?", solucion:"Idoiak 5 urte, Martinek 7 urte" },
  { id:267, tema:"Buruketak", dificultad:"zaila", enunciado:"Laukizuzen baten alde bat bestea baino 3 cm handiagoa da. Azalera 10 cm² da. Zein dira aldeen neurriak?", solucion:"2 cm eta 5 cm" },
  { id:268, tema:"Buruketak", dificultad:"zaila", enunciado:"Karratu bati alde bakoitzeko 4 cm kenduz, 4 cm² azalera lortzen da. Zein da karratuaren hasierako aldea?", solucion:"x=6 cm" },
  { id:269, tema:"Buruketak", dificultad:"zaila", enunciado:"Bi zenbaki jarraiak daude. Bien biderkadura 110 da. Zein dira?", solucion:"10 eta 11 (edo -11 eta -10)" },
  { id:270, tema:"Buruketak", dificultad:"zaila", enunciado:"Banatu 20 bitan, bien karratuen batura 202 izateko. Zein dira bi zenbakiak?", solucion:"11 eta 9" },
  { id:271, tema:"Buruketak", dificultad:"zaila", enunciado:"Bi zenbaki jarraiak bikoitiak dira. Bien biderkadura 360 da. Zein dira?", solucion:"18 eta 20 (edo -20 eta -18)" },
  { id:272, tema:"Buruketak", dificultad:"zaila", enunciado:"Arrebak anaia baino 3 urte gehiago ditu. Adinen biderkadura 28 da. Zenbat urte ditu bakoitzak?", solucion:"Anaiak 4 urte, arrebak 7 urte" },
  { id:273, tema:"Buruketak", dificultad:"zaila", enunciado:"Laukizuzen baten luzera zabalera baino 5 cm handiagoa da. Azalera 150 cm² da. Zein dira neurriak?", solucion:"10 cm eta 15 cm" },
  { id:274, tema:"Buruketak", dificultad:"zaila", enunciado:"Karratu bati alde bakoitzeko 2 cm gehituz 49 cm² azalera lortzen da. Zein da hasierako aldea?", solucion:"x=5 cm" },
  { id:275, tema:"Buruketak", dificultad:"zaila", enunciado:"Triangelu zuzen baten kateto bat bestea baino 4 cm luzeagoa da. Hipotenusa 20 cm da. Zein dira kateto luzeerak?", solucion:"12 cm eta 16 cm" },
  { id:276, tema:"Buruketak", dificultad:"zaila", enunciado:"Igerileku angeluzuzena: luzerak zabalera baino 3 metro gehiago ditu. Azalera 40 m² da. Zein dira neurriak?", solucion:"5 m eta 8 m" },
  { id:277, tema:"Buruketak", dificultad:"zaila", enunciado:"Bi zenbaki: batak bestea baino 5 gehiago du eta bien karratuen batura 97 da. Zein dira?", solucion:"4 eta 9" },
  { id:278, tema:"Buruketak", dificultad:"zaila", enunciado:"Bi zenbaki jarraiak: bien karratuen batura 365 da. Zein dira?", solucion:"13 eta 14" },
  { id:279, tema:"Buruketak", dificultad:"zaila", enunciado:"Auto batek 200 km egiten ditu v km/h abiaduran. Abiadurari 10 km/h gehituz 1 ordu lehenago iritsiko litzateke. Zein da jatorrizko abiadura?", solucion:"v=40 km/h" },
  { id:280, tema:"Buruketak", dificultad:"zaila", enunciado:"Txirrindulari batek 30 km egiten ditu. Abiadurari 5 km/h gehituz 1 ordu lehenago iritsiko litzateke. Zein da jatorrizko abiadura?", solucion:"v=10 km/h" },

  // — BLOKE 6 GORDETAKO PUNTUA (280 galdera — OSOA) —

];

// ===== ESTADÍSTICAS DEL BANCO =====
// Lehenengo mailako ekuazioak: 34 erraza + 33 ertaina + 33 zaila = 100
// Bigarren mailako ekuazioak:  34 erraza + 33 ertaina + 33 zaila = 100
// Sistemak:                    25 erraza + 25 zaila               =  50
// Buruketak:                   15 erraza + 15 zaila               =  30
// GUZTIRA: 280 galdera

if (typeof module !== 'undefined') module.exports = { QUESTIONS_BANK };
