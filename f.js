/* ===== DATOS: tu dataset verificado (208 registros) ===== */
/* ===== DATOS: tu dataset verificado (208 registros) ===== */
const rawTransactions = [
    { id: 1, fecha: "06 ENE 26", mes: "ENERO", cotizacion: "220 - 8159", factura: "FICCXX - 4639", cuenta: "ADSA", monto: 1865.28, montoSinIva: 1608.0, producto: "(2-PRAKTICA)" },
    { id: 2, fecha: "12 ENE 26", mes: "ENERO", cotizacion: "220 - 8216", factura: "FICCXX - 4667", cuenta: "ADSA", monto: 6936.94, montoSinIva: 5980.12, producto: "(2-ENDURENCE)(2-IMPER3AÑ0S)" },
    { id: 3, fecha: "12 ENE 26", mes: "ENERO", cotizacion: "220 - 8222", factura: "FICCXX - 4668", cuenta: "ADSA", monto: 854.00, montoSinIva: 736.21, producto: "(4-ALKAFIN)" },
    { id: 4, fecha: "13 ENE 26", mes: "ENERO", cotizacion: "220 - 8217", factura: "FICCXX - 4675", cuenta: "INCIEFY", monto: 1470.00, montoSinIva: 1267.24, producto: "(2-DUREXMASTER)" },
    { id: 5, fecha: "14 ENE 26", mes: "ENERO", cotizacion: "220 - 8243", factura: "TC # - 0392", cuenta: "ING LUIS", monto: 4722.00, montoSinIva: 4070.69, producto: "(2-PRO1000&ACCESORIOS)" },
    { id: 6, fecha: "16 ENE 26", mes: "ENERO", cotizacion: "220 - 8294", factura: "FICCXX - 4703", cuenta: "INCIEFY", monto: 1785.59, montoSinIva: 1539.30, producto: "(4-COMEX100TOTAL)" },
    { id: 7, fecha: "19 ENE 26", mes: "ENERO", cotizacion: "220 - 8312", factura: "FICCXX - 4720", cuenta: "ADSA", monto: 4506.60, montoSinIva: 3885.0, producto: "(2-PRACTIKA)(2-IMPER5AÑOS)" },
    { id: 8, fecha: "19 ENE 26", mes: "ENERO", cotizacion: "220 - 8317", factura: "TC # - 0396", cuenta: "NIEVES", monto: 4872.00, montoSinIva: 4200.0, producto: "(2-ENDURENCE)" },
    { id: 9, fecha: "24 ENE 26", mes: "ENERO", cotizacion: "220 - 8376", factura: "FICCXX - 4751", cuenta: "ADSA", monto: 1809.60, montoSinIva: 1560.0, producto: "(2-PRACTIKA) SUSTITUYE A 220-8372" },
    { id: 10, fecha: "24 ENE 26", mes: "ENERO", cotizacion: "220 - 8395", factura: "FICCXX - 4759", cuenta: "ADSA", monto: 1476.65, montoSinIva: 1272.97, producto: "(2-EVERLAST)" },
    { id: 11, fecha: "28 ENE 26", mes: "ENERO", cotizacion: "220 - 8417", factura: "FICCXX - 4769", cuenta: "CORECO", monto: 495.56, montoSinIva: 427.21, producto: "(7-OK RESANADOR)(ACCESORIOS)" },
    { id: 12, fecha: "28 ENE 26", mes: "ENERO", cotizacion: "220 - 8397", factura: "TC # - 0401", cuenta: "CONTR. GILBERTO", monto: 3480.00, montoSinIva: 3000.0, producto: "(2- IMPERCOMEX)" },
    { id: 13, fecha: "31 ENE 26", mes: "ENERO", cotizacion: "220 - 8448", factura: "TC # - 0402", cuenta: "ING LUIS", monto: 2099.00, montoSinIva: 1809.48, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 14, fecha: "05 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8490", factura: "FICCXX - 4812", cuenta: "PASEOS COUNTRY", monto: 8707.44, montoSinIva: 7506.41, producto: "(2- PRO1000)(ALKAFIN)(ACCESORIOS)" },
    { id: 15, fecha: "09 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8539", factura: "FICCXX - 4833", cuenta: "CORROSION MASTER", monto: 14906.49, montoSinIva: 12850.42, producto: "(U-21 RESINA)(THINNER)" },
    { id: 16, fecha: "09 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8527", factura: "FICCXX - 4834", cuenta: "CORROSION MASTER", monto: 6737.63, montoSinIva: 5808.30, producto: "( 2 - COMEX100)" },
    { id: 17, fecha: "11 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8583", factura: "TC # - 0409", cuenta: "ING JORGE HERNANDEZ", monto: 3692.49, montoSinIva: 3183.18, producto: "(2 - PRO1000)" },
    { id: 18, fecha: "12 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8582", factura: "FICCXX - 4936", cuenta: "LIC. JOSE ZURITA", monto: 5584.39, montoSinIva: 4814.13, producto: "(2 - PRO1000)(ESMALTES)(ACCESORIOS)" },
    { id: 19, fecha: "13 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8565", factura: "FICCXX - 4876", cuenta: "BONATTI SPA", monto: 182700.00, montoSinIva: 157500.0, producto: "(2 - VINIMEX ULTRALAVABLE)" },
    { id: 20, fecha: "16 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8620", factura: "FICCXX - 4884", cuenta: "MOMOS", monto: 2262.00, montoSinIva: 1950.0, producto: "( 2 - IMPERCOMEX 3 AÑOS)" },
    { id: 21, fecha: "16 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8620", factura: "FICCXX - 4885", cuenta: "MOMOS", monto: 754.00, montoSinIva: 650.0, producto: "( 2 - IMPERCOMEX 3 AÑOS)" },
    { id: 22, fecha: "16 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8620", factura: "TC # - 0411", cuenta: "MOMOS", monto: 3723.00, montoSinIva: 3209.48, producto: "( ROLLO REFORZADO)" },
    { id: 23, fecha: "17 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8642", factura: "FICCXX - 4892", cuenta: "CORROSION MASTER", monto: 3368.81, montoSinIva: 2904.15, producto: "( 2 - COMEX100)" },
    { id: 24, fecha: "17 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8628", factura: "TC # - 0413", cuenta: "ING JORGE HERNANDEZ", monto: 2939.09, montoSinIva: 2533.70, producto: "( 2 - EVERLAST)" },
    { id: 25, fecha: "17 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8648", factura: "TC # - 0414", cuenta: "ING JORGE HERNANDEZ", monto: 13663.85, montoSinIva: 11779.18, producto: "( 2 - COMEX100)" },
    { id: 26, fecha: "17 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8629", factura: "TC # - 0415", cuenta: "ING RAFAEL", monto: 1469.55, montoSinIva: 1266.85, producto: "( 2 - EVERLAST)" },
    { id: 27, fecha: "19 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8670", factura: "TC # - 0417", cuenta: "ING JORGE HERNANDEZ", monto: 196.00, montoSinIva: 168.97, producto: "( 2 - PRO1000)" },
    { id: 28, fecha: "19 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8679", factura: "TC # - 04222", cuenta: "ING HECTOR", monto: 13360.07, montoSinIva: 11517.30, producto: "( 2 - DUREX)" },
    { id: 29, fecha: "19 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8689", factura: "TC # - 0421", cuenta: "ING HECTOR", monto: 172.00, montoSinIva: 148.28, producto: "( 2 - DUREX)" },
    { id: 30, fecha: "19 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8695", factura: "TC # - 0420", cuenta: "ING HECTOR", monto: 1798.42, montoSinIva: 1550.36, producto: "( 2 - SELLADOR)" },
    { id: 31, fecha: "21 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8593", factura: "FICCXX - 4937", cuenta: "BONATTI SPA", monto: 9736.83, montoSinIva: 8393.82, producto: "(THINNER)" },
    { id: 32, fecha: "25 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8775", factura: "TC # - 0427", cuenta: "ING HECTOR", monto: 7198.59, montoSinIva: 6205.68, producto: "(DUREX)" },
    { id: 33, fecha: "25 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8745", factura: "TC # - 0426", cuenta: "ING HECTOR", monto: 11997.65, montoSinIva: 10342.80, producto: "(DUREX)" },
    { id: 34, fecha: "27 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8821", factura: "TC # - 0432", cuenta: "ING HECTOR", monto: 2824.04, montoSinIva: 2434.52, producto: "(DUREX)" },
    { id: 35, fecha: "26 FEB 26", mes: "FEBRERO", cotizacion: "220 - 8876", factura: "FICCXX - 4984", cuenta: "BONATTI SPA", monto: 27639.98, montoSinIva: 23827.57, producto: "(VINIMEX)" },
    { id: 36, fecha: "02 MAR 26", mes: "MARZO", cotizacion: "220 - 8822", factura: "FICCXX - 5006", cuenta: "CONTRATISTA BONATTI ALEJANDRO", monto: 975.91, montoSinIva: 841.30, producto: "( 2 - COMEX 100 RAL 1023)" },
    { id: 37, fecha: "05 MAR 26", mes: "MARZO", cotizacion: "220 - 8877", factura: "TC # - 0435", cuenta: "ING HECTOR", monto: 1671.56, montoSinIva: 1441.00, producto: "( 2 - PRO 1000 NEGRO)" },
    { id: 38, fecha: "06 MAR 26", mes: "MARZO", cotizacion: "220 - 8892", factura: "FICCXX - 5039", cuenta: "ADSA", monto: 8356.59, montoSinIva: 7203.96, producto: "( 2 - ENDURENCE )" },
    { id: 39, fecha: "10 MAR 26", mes: "MARZO", cotizacion: "220 - 8612", factura: "FICCXX - 5061", cuenta: "TEGNOLOGIAS VALTO", monto: 5601.38, montoSinIva: 4828.78, producto: "( 2 - SIGMA SHIELD )" },
    { id: 40, fecha: "10 MAR 26", mes: "MARZO", cotizacion: "220 - 8914", factura: "FICCXX - 5060", cuenta: "KERMITY NOVELO", monto: 16589.95, montoSinIva: 14301.68, producto: "PAGADO ( 2 - COMEX 100 PET)" },
    { id: 41, fecha: "10 MAR 26", mes: "MARZO", cotizacion: "220 - 8909", factura: "FICCXX - 5073", cuenta: "CORROSION MASTER", monto: 7753.16, montoSinIva: 6683.76, producto: "PAGADO 31 MAR26 ( 2 - SIGMA FAST 278)" },
    { id: 42, fecha: "09 MAR 26", mes: "MARZO", cotizacion: "220 - 8606", factura: "TC # - 0439", cuenta: "ING HECTOR", monto: 2871.32, montoSinIva: 2475.28, producto: "( 2 - ENDURENCE )" },
    { id: 43, fecha: "10 MAR 26", mes: "MARZO", cotizacion: "220 - 8606", factura: "TC # - 0443", cuenta: "ING HECTOR", monto: 1199.76, montoSinIva: 1034.28, producto: "( 2 - ENDURENCE )" },
    { id: 44, fecha: "10 MAR 26", mes: "MARZO", cotizacion: "220 - 8935", factura: "FICCXX - 5072", cuenta: "CORROSION MASTER", monto: 8333.34, montoSinIva: 7183.91, producto: "PAGO 30MAR26 ( 2 - SIGMA FAST 278)" },
    { id: 45, fecha: "12 MAR 26", mes: "MARZO", cotizacion: "220 - 8976", factura: "TC # - 0448", cuenta: "ING HECTOR", monto: 1199.76, montoSinIva: 1034.28, producto: "( 2 - ENDURENCE )" },
    { id: 46, fecha: "12 MAR 26", mes: "MARZO", cotizacion: "220 - 8967", factura: "FICCXX - 5086", cuenta: "CORROSION MASTER", monto: 11872.74, montoSinIva: 10235.12, producto: "PAGADO 08ABR26 ( 2 - SIGMASHIELD)" },
    { id: 47, fecha: "13 MAR 26", mes: "MARZO", cotizacion: "220 - 8918", factura: "TC # - 0450", cuenta: "SR. ARTURO", monto: 5568.00, montoSinIva: 4800.00, producto: "( 2 - EVERLAST 5AÑOS )" },
    { id: 48, fecha: "17 MAR 26", mes: "MARZO", cotizacion: "220 - 8995", factura: "FICCXX - 5102", cuenta: "ADSA", monto: 1820.30, montoSinIva: 1569.22, producto: "( 2 - ENDURENCE )" },
    { id: 49, fecha: "17 MAR 26", mes: "MARZO", cotizacion: "220 - 9002", factura: "FICCXX - 5104", cuenta: "CORROSION MASTER", monto: 7753.16, montoSinIva: 6683.76, producto: "PAGADO 5MAY26 ( 2 - SIGMA FAST 278)" },
    { id: 50, fecha: "20 MAR 26", mes: "MARZO", cotizacion: "220 - 8912", factura: "FICCXX - 5130", cuenta: "KERMITY NOVELO", monto: 5568.00, montoSinIva: 4800.00, producto: "PAGADO 14ABR26 ( 2 - EVERLAST 5 AÑOS)" },
    { id: 51, fecha: "26 MAR 26", mes: "MARZO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5171", cuenta: "CORROSION MASTER", monto: 11629.74, montoSinIva: 10025.64, producto: "CREDITO ( 2 - SIGMA FAST 278)" },
    { id: 52, fecha: "26 MAR 26", mes: "MARZO", cotizacion: "220 - 9089", factura: "FICCXX - 5165", cuenta: "GRUPO PYRGOS", monto: 3907.99, montoSinIva: 3368.96, producto: "( 2 - COMEX100)" },
    { id: 53, fecha: "30 MAR 26", mes: "MARZO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5182", cuenta: "CORROSION MASTER", monto: 11629.74, montoSinIva: 10025.64, producto: "CREDITO ( 2 - SIGMA FAST 278)" },
    { id: 54, fecha: "31 MAR 26", mes: "MARZO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5199", cuenta: "CORROSION MASTER", monto: 11629.74, montoSinIva: 10025.64, producto: "CREDITO ( 2 - SIGMA FAST 278)" },
    { id: 55, fecha: "06 ABR 26", mes: "ABRIL", cotizacion: "220 - 9093", factura: "TC # - 0459", cuenta: "PARTICULAR", monto: 1069.00, montoSinIva: 921.55, producto: "( 2 - IMPERCOMEX5AÑOS)" },
    { id: 56, fecha: "06 ABR 26", mes: "ABRIL", cotizacion: "220 - 9169", factura: "TC # - 0458", cuenta: "ING HECTOR", monto: 2399.53, montoSinIva: 2068.56, producto: "( 2 - ENDURENCE)" },
    { id: 57, fecha: "07 ABR 26", mes: "ABRIL", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5224", cuenta: "CORROSION MASTER", monto: 5254.09, montoSinIva: 4529.39, producto: "CREDITO ( 2 - SIGMA FAST 278)" },
    { id: 58, fecha: "07 ABR 26", mes: "ABRIL", cotizacion: "220 - 9158", factura: "TC # - 0463", cuenta: "CONTRATISTA RODRIGO", monto: 1495.19, montoSinIva: 1288.96, producto: "( 2 - IMPERCOMEX5AÑOS)" },
    { id: 59, fecha: "08 ABR 26", mes: "ABRIL", cotizacion: "220 - 9191", factura: "FICCXX - 5238", cuenta: "CORROSION MASTER", monto: 7753.16, montoSinIva: 6683.76, producto: "CREDITO ( 2 - SIGMA FAST 278)" },
    { id: 60, fecha: "08 ABR 26", mes: "ABRIL", cotizacion: "220 - 9195", factura: "FICCXX - 5239", cuenta: "CORROSION MASTER", monto: 3368.81, montoSinIva: 2904.15, producto: "PAGADO ( 2 - COMEX100)" },
    { id: 61, fecha: "13 ABR 26", mes: "ABRIL", cotizacion: "220 - 9257", factura: "FICCXX - 5262", cuenta: "CORROSION MASTER", monto: 7529.65, montoSinIva: 6491.08, producto: "KONTEMPO ( 2 - U-21)" },
    { id: 62, fecha: "13 ABR 26", mes: "ABRIL", cotizacion: "220 - 9253", factura: "FICCXX - 5270", cuenta: "CONSTRUCCIONES PENINSULARES DBSM", monto: 3248.00, montoSinIva: 2800.00, producto: "( 2 - ENDURENCE)" },
    { id: 63, fecha: "15 ABR 26", mes: "ABRIL", cotizacion: "220 - 9307", factura: "FICCXX - 5290", cuenta: "CORROSION MASTER", monto: 7529.65, montoSinIva: 6491.08, producto: "KONTEMPO ( 2 - SIGMAFAST278)" },
    { id: 64, fecha: "15 ABR 26", mes: "ABRIL", cotizacion: "220 - 9286", factura: "FICCXX - 5291", cuenta: "GRUPO PYRGOS", monto: 444.00, montoSinIva: 382.76, producto: "( 2 - AEROCOMEX)" },
    { id: 65, fecha: "15 ABR 26", mes: "ABRIL", cotizacion: "220 - 9289", factura: "FICCXX - 5292", cuenta: "GRUPO PYRGOS", monto: 10089.80, montoSinIva: 8698.10, producto: "( 2 - VINIMEX CLASICA)" },
    { id: 66, fecha: "16 ABR 26", mes: "ABRIL", cotizacion: "220 - 9285", factura: "TC # - 0474", cuenta: "PARTICULAR", monto: 3596.00, montoSinIva: 3100.00, producto: "( 2 - ENDURENCE ) ( ACCESORIOS )" },
    { id: 67, fecha: "23 ABR 26", mes: "ABRIL", cotizacion: "220 - 9421", factura: "FICCXX - 5341", cuenta: "ARQ LUIS ARTURO", monto: 1058.00, montoSinIva: 912.07, producto: "220 - 9414 ( 2 - EVERLAST 5 AÑOS)" },
    { id: 68, fecha: "23 ABR 26", mes: "ABRIL", cotizacion: "220 - 9422", factura: "FICCXX - 5342", cuenta: "ARQ LUIS ARTURO", monto: 1058.00, montoSinIva: 912.07, producto: "220 - 9414 ( 2 - EVERLAST 5 AÑOS)" },
    { id: 69, fecha: "23 ABR 26", mes: "ABRIL", cotizacion: "220 - 9411", factura: "FICCXX - 5343", cuenta: "BMB CONDOS", monto: 3826.34, montoSinIva: 3298.57, producto: "( 2 - PRO1000 ) ( ACCESORIOS )" },
    { id: 70, fecha: "23 ABR 26", mes: "ABRIL", cotizacion: "220 - 9285", factura: "TC # - 0483", cuenta: "PARTICULAR", monto: 1199.76, montoSinIva: 1034.28, producto: "( 2 - ENDURENCE ) ( ACCESORIOS )" },
    { id: 71, fecha: "24 ABR 26", mes: "ABRIL", cotizacion: "220 - 9074", factura: "FICCXX - 5359", cuenta: "COLONOS TORRE UNO", monto: 2065.04, montoSinIva: 1780.21, producto: "( 2 - PRO1000 ) ( ACCESORIOS )( COMEX 100 TOTAL)" },
    { id: 72, fecha: "28 ABR 26", mes: "ABRIL", cotizacion: "220 - 9475", factura: "FICCXX - 5374", cuenta: "PASEOS COUNTRY", monto: 9542.40, montoSinIva: 8226.21, producto: "( 2 - AMERLOCK 2/400 ) ( U-21 )( THINNER)" },
    { id: 73, fecha: "28 ABR 26", mes: "ABRIL", cotizacion: "220 - 9465", factura: "FICCXX - 5376", cuenta: "ADSA", monto: 1939.64, montoSinIva: 1672.10, producto: "( 2 - DUREX MASTER ) ( IMPERCOMEX 5 AÑOS )( THINNER)" },
    { id: 74, fecha: "29 ABR 26", mes: "ABRIL", cotizacion: "220 - 9489", factura: "TC # - 0491", cuenta: "PARTICULAR", monto: 1972.00, montoSinIva: 1700.00, producto: "( 2 - DUREX MASTER ) ( IMPERCOMEX 5 AÑOS )( THINNER)" },
    { id: 75, fecha: "04 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5433", cuenta: "KEKEN", monto: 108239.27, montoSinIva: 93309.72, producto: "CREDITO ( 2 - PRO1000 ) (2- DUREX )" },
    { id: 76, fecha: "04 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5434", cuenta: "KEKEN", monto: 727.97, montoSinIva: 627.56, producto: "CREDITO ( AERO COMEX)" },
    { id: 77, fecha: "04 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5434", cuenta: "KEKEN", monto: 711.96, montoSinIva: 613.76, producto: "CREDITO ( AERO COMEX)" },
    { id: 78, fecha: "06 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5443", cuenta: "HACIENDA XCANATUN", monto: 666.00, montoSinIva: 574.14, producto: "CREDITO ( AERO COMEX)" },
    { id: 79, fecha: "06 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5450", cuenta: "SERVICIOS INMOBILIARIOS TURISTICOS", monto: 3203.97, montoSinIva: 2762.04, producto: "CREDITO ( IMPERCOMEX 3 AÑOS)" },
    { id: 80, fecha: "06 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5451", cuenta: "SERVICIOS INMOBILIARIOS TURISTICOS", monto: 2064.80, montoSinIva: 1780.00, producto: "CREDITO ( THINNER AMERICANO)" },
    { id: 81, fecha: "06 MAY 26", mes: "MAYO", cotizacion: "220 - 9567", factura: "FICCXX - 5456", cuenta: "CORROSION MASTER", monto: 5883.26, montoSinIva: 5071.78, producto: "KONTEMPO ( THINNER AMERICANO)" },
    { id: 82, fecha: "07 MAY 26", mes: "MAYO", cotizacion: "220 - 9546", factura: "FICCXX - 5458", cuenta: "PLANEACION, CONSTRUCCION Y ACABADOS", monto: 30895.88, montoSinIva: 26634.38, producto: "( U-21)" },
    { id: 83, fecha: "07 MAY 26", mes: "MAYO", cotizacion: "220 - 9546", factura: "FICCXX - 5458", cuenta: "PLANEACION, CONSTRUCCION Y ACABADOS", monto: 38722.42, montoSinIva: 33381.40, producto: "( RP-6 MODIFICADO)" },
    { id: 84, fecha: "13 MAY 26", mes: "MAYO", cotizacion: "220 - 9611", factura: "FICCXX - 5481", cuenta: "BRISEYDA GUADALUPE", monto: 20199.34, montoSinIva: 17413.22, producto: "( VINIMEX TOTAL ULTRALAVABLE)" },
    { id: 85, fecha: "13 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5483", cuenta: "KEKEN", monto: 18070.15, montoSinIva: 15577.72, producto: "CREDITO ( VINIMEX CLASICA)" },
    { id: 86, fecha: "14 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5486", cuenta: "SERVICIOS INMOBILIARIOS TURISTICOS", monto: 4085.95, montoSinIva: 3522.37, producto: "CREDITO ( IMPERCOMEX 3AÑOS)" },
    { id: 87, fecha: "16 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5502", cuenta: "HACIENDA XCANATUN", monto: 915.88, montoSinIva: 789.55, producto: "CREDITO ( CHUKRET )( ACCESORIOS)" },
    { id: 88, fecha: "18 MAY 26", mes: "MAYO", cotizacion: "220 - 9676", factura: "FICCXX - 5506", cuenta: "BRISEYDA GUADALUPE", monto: 5644.13, montoSinIva: 4865.63, producto: "( IMPERCOMEX 3 AÑOS & ACCESORIOS)" },
    { id: 89, fecha: "19 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5511", cuenta: "KEKEN", monto: 19471.99, montoSinIva: 16786.20, producto: "CREDITO ( COMEX 100 TOTAL PET MATE)" },
    { id: 90, fecha: "20 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5514", cuenta: "BMB CONDOS", monto: 1518.10, montoSinIva: 1308.71, producto: "( DUREX MASTER)" },
    { id: 91, fecha: "19 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5512", cuenta: "ALUPREMIEER", monto: 6818.48, montoSinIva: 5878.00, producto: "( SIGMARINE 28)( FLASH COAT MATE)" },
    { id: 92, fecha: "22 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5533", cuenta: "HACIENDA XCANATUN", monto: 11331.37, montoSinIva: 9768.42, producto: "( THINNER ESTANDAR)( FLASH COAT MATE)" },
    { id: 93, fecha: "22 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5534", cuenta: "SERVICIOS INMOBILIARIOS TURISTICOS", monto: 15460.02, montoSinIva: 13327.60, producto: "( VINIMEX CLASICA)" },
    { id: 94, fecha: "23 MAY 26", mes: "MAYO", cotizacion: "220 - 9747", factura: "FICCXX - 5539", cuenta: "PYRGOS", monto: 2898.40, montoSinIva: 2498.62, producto: "( PRO1000)(SELLADOR CLASICO)(ACCESORIOS)" },
    { id: 95, fecha: "22 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5537", cuenta: "SERVICIOS INMOBILIARIOS TURISTICOS", monto: 15158.29, montoSinIva: 13067.49, producto: "( COMEX 100 TOTAL PET)(WASH PRIME)" },
    { id: 96, fecha: "02 MAY 26", mes: "MAYO", cotizacion: "220 - 9462", factura: "COBRAR 2 DE JUNIO", cuenta: "TORRE 1", monto: 4414.30, montoSinIva: 3805.43, producto: "( VIA COLOR )( THINNER )" },
    { id: 97, fecha: "25 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5541", cuenta: "KEKEN", monto: 113957.11, montoSinIva: 98238.89, producto: "( DUREX MASTER)(VINIMEX)" },
    { id: 98, fecha: "27 MAY 26", mes: "MAYO", cotizacion: "220 - 9770", factura: "FICCXX - 5559", cuenta: "ESCOPICO", monto: 12185.15, montoSinIva: 10504.44, producto: "( PRO1000)(SELLADOR CLASICO)" },
    { id: 99, fecha: "27 MAY 26", mes: "MAYO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5562", cuenta: "KEKEN", monto: 54515.03, montoSinIva: 46995.72, producto: "( amerlock 2/400 ral 9001 1001 7031)" },
    { id: 100, fecha: "28 MAY 26", mes: "MAYO", cotizacion: "220 - 9806", factura: "FICCXX - 5566", cuenta: "PYRGOS", monto: 2584.33, montoSinIva: 2227.87, producto: "( PRO1000)(SELLADOR CLASICO)(ACCESORIOS)" },
    { id: 101, fecha: "04 JUN 26", mes: "JUNIO", cotizacion: "220 - 9850", factura: "TC # - 0520", cuenta: "ESCOPICO", monto: 4060.00, montoSinIva: 3500.00, producto: "( PRO1000)" },
    { id: 102, fecha: "04 JUN 26", mes: "JUNIO", cotizacion: "220 - 9893", factura: "FICCXX - 5611", cuenta: "BRISEYDA GUADALUPE", monto: 2146.92, montoSinIva: 1850.79, producto: "( PRO1000)(ACCESORIOS)" },
    { id: 103, fecha: "06 JUN 26", mes: "JUNIO", cotizacion: "220 - 9918", factura: "TC # - 0524", cuenta: "ESCOPICO", monto: 6090.00, montoSinIva: 5250.00, producto: "( PRO1000)" },
    { id: 104, fecha: "05 JUN 26", mes: "JUNIO", cotizacion: "220 - 9462", factura: "FICCXX - 5613", cuenta: "TORRE 1", monto: 4414.30, montoSinIva: 3805.43, producto: "( PRO1000)(ACCESORIOS)" },
    { id: 105, fecha: "06 JUN 26", mes: "JUNIO", cotizacion: "220 - 9923", factura: "FICCXX - 5621", cuenta: "ADSA", monto: 2749.20, montoSinIva: 2370.00, producto: "( IMPERCOMEX 5 AÑOS)(SOLUTION PRO)" },
    { id: 106, fecha: "06 JUN 26", mes: "JUNIO", cotizacion: "220 - 9928", factura: "TC # - 0525", cuenta: "SR. MARTIN", monto: 3132.29, montoSinIva: 2700.25, producto: "( ALKAFIN)" },
    { id: 107, fecha: "09 JUN 26", mes: "JUNIO", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 5643", cuenta: "MULTISERVICIOS INMOVILIARIOS TURISTICOS", monto: 784.00, montoSinIva: 675.86, producto: "( PRO1000)" },
    { id: 108, fecha: "10 JUN 26", mes: "JUNIO", cotizacion: "220 - 9985", factura: "FICCXX - 5553", cuenta: "PYRGOS", monto: 1596.16, montoSinIva: 1376.00, producto: "(VINIMEX CLASICO)" },
    { id: 109, fecha: "17 JUN 26", mes: "JUNIO", cotizacion: "220 - 10110", factura: "TC # - 0549", cuenta: "ING JAIME NIGMO", monto: 920.00, montoSinIva: 793.10, producto: "( TACO DE COLOR 2)" },
    { id: 110, fecha: "17 JUN 26", mes: "JUNIO", cotizacion: "220 - 10121", factura: "TC # - 0550", cuenta: "ING JAIME NIGMO", monto: 706.00, montoSinIva: 608.62, producto: "(COMEX 100 TOTAL PET)" },
    { id: 111, fecha: "19 JUN 26", mes: "JUNIO", cotizacion: "220 - 10129", factura: "FICCXX - 5728", cuenta: "ADSA", monto: 974.40, montoSinIva: 840.00, producto: "( IMPERCOMEX 5 AÑOS)(SOLUTION PRO)" },
    { id: 112, fecha: "22 JUN 26", mes: "JUNIO", cotizacion: "220 - 10162", factura: "TC # - 0560", cuenta: "ESCOPICO", monto: 8124.64, montoSinIva: 7004.00, producto: "(PR0 1000)(SELLADOR 5X1)" },
    { id: 113, fecha: "22 JUN 26", mes: "JUNIO", cotizacion: "220 - 10143", factura: "TC # - 0559", cuenta: "ING JAIME NIGMO", monto: 2577.20, montoSinIva: 2221.72, producto: "(COMEX 100 TOTAL PET)" },
    { id: 114, fecha: "23 JUN 26", mes: "JUNIO", cotizacion: "220 - 10171", factura: "TC # - 0564", cuenta: "ING LUIS", monto: 9572.00, montoSinIva: 8251.72, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 115, fecha: "23 JUN 26", mes: "JUNIO", cotizacion: "220 - 10197", factura: "FICCXX - 5749", cuenta: "GRUPO PYRGOS", monto: 9630.93, montoSinIva: 8302.53, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 116, fecha: "25 JUN 26", mes: "JUNIO", cotizacion: "220 - 10216", factura: "TC # - 0567", cuenta: "ING JAIME NIGMO", monto: 1517.65, montoSinIva: 1308.32, producto: "(COMEX 100 TOTAL PET)" },
    { id: 117, fecha: "25 JUN 26", mes: "JUNIO", cotizacion: "220 - 10224", factura: "FICCXX - 5761", cuenta: "JADE URBANA", monto: 60938.93, montoSinIva: 52533.56, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 118, fecha: "25 JUN 26", mes: "JUNIO", cotizacion: "220 - 10226", factura: "FICCXX - 5763", cuenta: "GRUPO PYRGOS", monto: 9826.88, montoSinIva: 8471.45, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 119, fecha: "26 JUN 26", mes: "JUNIO", cotizacion: "220 - 10", factura: "FICCXX - 5", cuenta: "DESARROLLOS E YE", monto: 0.00, montoSinIva: 0.00, producto: "CANCELADA" },
    { id: 120, fecha: "27 JUN 26", mes: "JUNIO", cotizacion: "220 - 10261", factura: "TC # - 0571", cuenta: "ING LUIS", monto: 1972.00, montoSinIva: 1700.00, producto: "(2- PRO1000)" },
    { id: 121, fecha: "27 JUN 26", mes: "JUNIO", cotizacion: "220 - 10163", factura: "FICCXX - 5791", cuenta: "ALUPREMIEER", monto: 6818.48, montoSinIva: 5878.00, producto: "( SIGMARINE 28)( FLASH COAT MATE)" },
    { id: 122, fecha: "27 JUN 26", mes: "JUNIO", cotizacion: "220 - 10281", factura: "FICCXX - 5792", cuenta: "GRUPO PYRGOS", monto: 7597.90, montoSinIva: 6549.91, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 123, fecha: "27 JUN 26", mes: "JUNIO", cotizacion: "220 - 10281", factura: "FICCXX - 5792", cuenta: "GRUPO PYRGOS", monto: 8423.40, montoSinIva: 7261.55, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 124, fecha: "29 JUN 26", mes: "JUNIO", cotizacion: "220 - 10304", factura: "TC # - 0575", cuenta: "CONSTRUCCIONES PENINSULARES DBSM", monto: 2166.00, montoSinIva: 1867.24, producto: "(2-SOLUTION)" },
    { id: 125, fecha: "29 JUN 26", mes: "JUNIO", cotizacion: "220 - 10313", factura: "FICCXX - 5809", cuenta: "GRUPO PYRGOS", monto: 3841.00, montoSinIva: 3311.21, producto: "(2- PRO1000)(ACCESORIOS)" },
    { id: 126, fecha: "30 JUN 26", mes: "JUNIO", cotizacion: "220 - 10350", factura: "TC # - 0578", cuenta: "ING JAIME NIGMO", monto: 5682.64, montoSinIva: 4898.83, producto: "(COMEX 100 TOTAL PET)" },
    { id: 127, fecha: "02 JUL 26", mes: "JULIO", cotizacion: "220 - 10374", factura: "TC # - 0581", cuenta: "ING HECTOR", monto: 1199.75, montoSinIva: 1034.27, producto: "(2-SOLUTION C.C 279-02 ARRULLO)" },
    { id: 128, fecha: "06 JUL 26", mes: "JULIO", cotizacion: "220 - 10375", factura: "TC # - 0581", cuenta: "ING EDUARDO [ALTABRISA51]", monto: 4029.00, montoSinIva: 3473.28, producto: "(2-SOLUTION) (2-ALKAFIN) (OK RESANADO)" },
    { id: 129, fecha: "07 JUL 26", mes: "JULIO", cotizacion: "ORDER / 00850 / OA / 26000830 / 0", factura: "FICCXX - 6003", cuenta: "BONATTI SPA", monto: 391815.09, montoSinIva: 337771.63, producto: "(2-COMEX 100 T0TAL PET) (2-AQCUA 100)" },
    { id: 130, fecha: "08 JUL 26", mes: "JULIO", cotizacion: "220 - 10432", factura: "TC # - 0591", cuenta: "CORROSION MASTER", monto: 6424.52, montoSinIva: 5538.38, producto: "(2-COMEX 100 T0TAL PET) (2-AQCUA 100)" },
    { id: 131, fecha: "10 JUL 26", mes: "JULIO", cotizacion: "220 - 10408", factura: "TC # - 0597", cuenta: "ING ANTONIO BOLIO", monto: 2030.00, montoSinIva: 1750.00, producto: "(2- PRO1000)" },
    { id: 132, fecha: "10 JUL 26", mes: "JULIO", cotizacion: "220 - 10407", factura: "TC # - 0595", cuenta: "CONTA ALFONZO", monto: 2662.20, montoSinIva: 2295.00, producto: "(2- ESSENTIAL)" },
    { id: 133, fecha: "10 JUL 26", mes: "JULIO", cotizacion: "220 - 10415", factura: "TC # - 0593", cuenta: "ING JAIME NIGMO", monto: 1584.40, montoSinIva: 1365.86, producto: "(2- COMEX 100 TOTAL PET)(VININIMEX CLASICA)" },
    { id: 134, fecha: "10 JUL 26", mes: "JULIO", cotizacion: "220 - 10453", factura: "TC # - 0596", cuenta: "ING LUIS MONTAÑEZ", monto: 1972.00, montoSinIva: 1700.00, producto: "(2- PRO1000)" },
    { id: 135, fecha: "10 JUL 26", mes: "JULIO", cotizacion: "220 - 10454", factura: "TC # - 0594", cuenta: "ING JAIME NIGMO", monto: 6171.20, montoSinIva: 5320.00, producto: "(2- VINIMEX CLASICA)" },
    { id: 136, fecha: "10 JUL 26", mes: "JULIO", cotizacion: "220 - 10492", factura: "FICCXX - 5899", cuenta: "ALUPREMIEER", monto: 6818.48, montoSinIva: 5878.00, producto: "(2- SIGMARIN 28)(FLAHS COAT NEGRO MATE)" },
    { id: 137, fecha: "16 JUL 26", mes: "JULIO", cotizacion: "220 - 10309", factura: "FICCXX - 5945", cuenta: "NAVELA DEPARTAMENTO", monto: 3304.56, montoSinIva: 2848.76, producto: "(2- PRO1000)(IMPERCOMEX 5AÑOS)" },
    { id: 138, fecha: "16 JUL 26", mes: "JULIO", cotizacion: "220 - 10580", factura: "FICCXX - 5947", cuenta: "MADENOVA", monto: 1336.00, montoSinIva: 1151.72, producto: "(2- THINNER e)" },
    { id: 139, fecha: "16 JUL 26", mes: "JULIO", cotizacion: "220 - 10561", factura: "FICCXX - 5946", cuenta: "MADENOVA", monto: 6979.05, montoSinIva: 6016.42, producto: "(2- E-10)" },
    { id: 140, fecha: "16 JUL 26", mes: "JULIO", cotizacion: "220 - 10487", factura: "FICCXX - 5949", cuenta: "CONSTRUCCIONES PENINSULARES DBSM", monto: 1083.00, montoSinIva: 933.62, producto: "(2-SOLUTION)" },
    { id: 141, fecha: "16 JUL 26", mes: "JULIO", cotizacion: "220 - 10566", factura: "TC # - 0604", cuenta: "ING JAIME NIGMO", monto: 734.00, montoSinIva: 632.76, producto: "(2-SOLUTION)" },
    { id: 142, fecha: "16 JUL 26", mes: "JULIO", cotizacion: "220 - 10566", factura: "FICCXX - 5907", cuenta: "ADSA", monto: 12406.20, montoSinIva: 10695.00, producto: "(2-SOLUTION)" },
    { id: 143, fecha: "22 JUL 26", mes: "JULIO", cotizacion: "220 - 10595", factura: "TC # - 0608", cuenta: "ING JAIME NIGMO", monto: 1468.80, montoSinIva: 1266.21, producto: "(VINIMEX CLASICA)" },
    { id: 144, fecha: "22 JUL 26", mes: "JULIO", cotizacion: "220 - 10605", factura: "FICCXX - 5975", cuenta: "COSTAMAYA", monto: 7815.99, montoSinIva: 6737.92, producto: "(COMEX 100 TOTAL PET)" },
    { id: 145, fecha: "22 JUL 26", mes: "JULIO", cotizacion: "220 - 10645", factura: "FICCXX - 5977", cuenta: "ADSA", monto: 1774.80, montoSinIva: 1530.00, producto: "(IMPERCOMEX 5 AÑOS)" },
    { id: 146, fecha: "23 JUL 26", mes: "JULIO", cotizacion: "220 - 10654", factura: "TC # - 0612", cuenta: "ING JAIME NIGMO", monto: 4640.80, montoSinIva: 4000.69, producto: "(ESMALTE 100 TOTAL PET)" },
    { id: 147, fecha: "23 JUL 26", mes: "JULIO", cotizacion: "220 - 10660", factura: "TC # - 0611", cuenta: "ING JAIME NIGMO", monto: 734.40, montoSinIva: 633.10, producto: "(VINIMEX CLASICA)" },
    { id: 148, fecha: "25 JUL 26", mes: "JULIO", cotizacion: "220 - 10725", factura: "TC # - 0614", cuenta: "CORROSION MASTER", monto: 6762.36, montoSinIva: 5829.62, producto: "(U-21 RAL 5005)" },
    { id: 149, fecha: "28 JUL 26", mes: "JULIO", cotizacion: "220 - 10740", factura: "FICCXX - 6028", cuenta: "COSTAMAYA", monto: 3907.99, montoSinIva: 3368.96, producto: "(COMEX 100 TOTAL PET)" },
    { id: 150, fecha: "30 JUL 26", mes: "JULIO", cotizacion: "220 - 10732", factura: "FICCXX - 6044", cuenta: "ALUPREMIEER", monto: 6818.48, montoSinIva: 5878.00, producto: "(2- SIGMARIN 28)(FLAHS COAT NEGRO MATE)" },
    { id: 151, fecha: "31 JUL 26", mes: "JULIO", cotizacion: "220 - 10715", factura: "TC # - 0623", cuenta: "ING EDUARDO [ALTABRISA51]", monto: 2394.80, montoSinIva: 2064.48, producto: "(SOLUTION PRO)(SELLADOR CLASICO)" },
    { id: 152, fecha: "31 JUL 26", mes: "JULIO", cotizacion: "220 - 10716", factura: "TC # - 0624", cuenta: "ING EDUARDO [ALTABRISA51]", monto: 1334.00, montoSinIva: 1150.00, producto: "(SOLUTION PRO)" },
    { id: 153, fecha: "08 AGO 26", mes: "AGOSTO", cotizacion: "220 - 10716", factura: "TC # - 0624", cuenta: "PARTICULAR", monto: 908.75, montoSinIva: 783.41, producto: "(IMPERCOMEX 5 AÑOS)" },
    { id: 154, fecha: "13 AGO 26", mes: "AGOSTO", cotizacion: "220 - 10957", factura: "FICCXX - 6144", cuenta: "GRUPO PYRGOS", monto: 5937.68, montoSinIva: 5118.69, producto: "(VINIMEX AMARILLO, ROJO Y NEGRO)(ACCESORIOS)" },
    { id: 155, fecha: "19 AGO 26", mes: "AGOSTO", cotizacion: "220 - 10994/11105", factura: "TC # - 0643", cuenta: "CONTRATISTA RODRIGO", monto: 4872.29, montoSinIva: 4200.25, producto: "(VINIMEX AMARILLO, ROJO Y NEGRO)(ACCESORIOS)" },
    { id: 156, fecha: "19 AGO 26", mes: "AGOSTO", cotizacion: "220 - 10991", factura: "FICCXX - 6181", cuenta: "EFICON", monto: 2730.00, montoSinIva: 2353.45, producto: "(DUREX MASTER)(ACCESORIOS)(SELLADOR 5X1)" },
    { id: 157, fecha: "21 AGO 26", mes: "AGOSTO", cotizacion: "220 - 10836", factura: "FICCXX - 6201", cuenta: "STAMPI TECH", monto: 2840.00, montoSinIva: 2448.28, producto: "(PRO 1000)(ACCESORIOS)" },
    { id: 158, fecha: "21 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11060/11075", factura: "TC # - 0644", cuenta: "ING EDUARDO [ALTABRISA51]", monto: 2394.80, montoSinIva: 2064.48, producto: "(VINIMEX AMARILLO, ROJO Y NEGRO)(ACCESORIOS)" },
    { id: 159, fecha: "22 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11059", factura: "FICCXX - 6207", cuenta: "ENALTO", monto: 16128.76, montoSinIva: 13904.10, producto: "(VINIMEX)()" },
    { id: 160, fecha: "25 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11103", factura: "FICCXX - 6229", cuenta: "DESARROLLOS PETRA", monto: 44993.20, montoSinIva: 38787.24, producto: "(PRO 1000)(VINIMEX)" },
    { id: 161, fecha: "25 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11133", factura: "TC # - 0647", cuenta: "ESCOPICO", monto: 2966.47, montoSinIva: 2557.30, producto: "(DUREX MASTER)" },
    { id: 162, fecha: "25 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11135", factura: "TC # - 0646", cuenta: "ING JAIME NIGMO", monto: 8118.00, montoSinIva: 6998.28, producto: "(DUREX MASTER)" },
    { id: 163, fecha: "28 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11152", factura: "FICCXX - 6246", cuenta: "ADSA", monto: 7238.40, montoSinIva: 6240.00, producto: "(PRACTIKA)" },
    { id: 164, fecha: "28 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11150", factura: "FICCXX - 6227", cuenta: "ALUPREMIER", monto: 6818.48, montoSinIva: 5878.00, producto: "(SIGMARINE 28)" },
    { id: 165, fecha: "29 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11189", factura: "TC # - 0657", cuenta: "ESCOPICO", monto: 5563.79, montoSinIva: 4796.37, producto: "(PRO1000 BLANCO OSTION)" },
    { id: 166, fecha: "29 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11189", factura: "TC # - 0658", cuenta: "RODRIGO", monto: 1416.76, montoSinIva: 1221.34, producto: "(SIGMARINE 28)" },
    { id: 167, fecha: "31 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11204", factura: "FICCXX - 6263", cuenta: "GRUPO PYRGOS", monto: 38767.15, montoSinIva: 33419.96, producto: "(VINIMEX CLASICA)" },
    { id: 168, fecha: "31 AGO 26", mes: "AGOSTO", cotizacion: "220 - 11205", factura: "FICCXX - 6264", cuenta: "GRUPO PYRGOS", monto: 215.91, montoSinIva: 186.13, producto: "(VINIMEX CLASICA)" },
    { id: 169, fecha: "02 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11225", factura: "FICCXX - 6281", cuenta: "DESARROLLOS PETRA", monto: 39715.00, montoSinIva: 34237.07, producto: "(VINIMEX CLASICA)(ACCESORIOS)" },
    { id: 170, fecha: "03 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 10772", factura: "FICCXX - 6300", cuenta: "CAMPO MAGNO", monto: 2030.00, montoSinIva: 1750.00, producto: "(VINIMEX CLASICA)(ACCESORIOS)" },
    { id: 171, fecha: "05 SEP 26", mes: "SEPTIEMBRE", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 6319", cuenta: "PAM PERRY", monto: 3217.55, montoSinIva: 2773.75, producto: "(VINIMEX CLASICA)" },
    { id: 172, fecha: "07 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11278", factura: "FICCXX - 6321", cuenta: "ALUPREMIER", monto: 3028.76, montoSinIva: 2611.00, producto: "(VINIMEX CLASICA)" },
    { id: 173, fecha: "07 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11240", factura: "FICCXX - 6326", cuenta: "SERVICIOS TURISTICOS DE YUCATAN", monto: 1801.48, montoSinIva: 1553.00, producto: "(VINIMEX CLASICA)" },
    { id: 174, fecha: "08 SEP 26", mes: "SEPTIEMBRE", cotizacion: "TICKET DIRECTO", factura: "TC # - 0668", cuenta: "ESCOPICO", monto: 5564.00, montoSinIva: 4796.55, producto: "(VINIMEX CLASICA)" },
    { id: 175, fecha: "08 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11346", factura: "FICCXX - 6337", cuenta: "GRUPO PYRGOS", monto: 1605.12, montoSinIva: 1383.72, producto: "(PRO 1000)" },
    { id: 176, fecha: "09 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11363", factura: "TC # - 0672", cuenta: "JAIME NIGMO", monto: 1864.00, montoSinIva: 1606.90, producto: "(COMEX 100 TOTAL PET)" },
    { id: 177, fecha: "10 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11385", factura: "FICCXX - 6349", cuenta: "RODRIGO", monto: 1477.38, montoSinIva: 1273.60, producto: "(IMPERCOMEX 3 AÑOS)" },
    { id: 178, fecha: "10 SEP 26", mes: "SEPTIEMBRE", cotizacion: "TICKET DIRECTO", factura: "TC # - 0674", cuenta: "ING JANETH CAMPO MAGNO", monto: 799.04, montoSinIva: 688.83, producto: "(IMPERCOMEX 3 AÑOS)" },
    { id: 179, fecha: "11 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11382", factura: "FICCXX - 6366", cuenta: "DESARROLLOS PETRA", monto: 5220.00, montoSinIva: 4500.00, producto: "(PRO 1000)" },
    { id: 180, fecha: "14 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11419", factura: "FICCXX - 6377", cuenta: "DESARROLLOS PETRA", monto: 20416.00, montoSinIva: 17600.00, producto: "(VINIMEX CLASICA MARMOL)" },
    { id: 181, fecha: "14 SEP 26", mes: "SEPTIEMBRE", cotizacion: "TICKET DIRECTO", factura: "TC # - 0682", cuenta: "ESCOPICO", monto: 2590.00, montoSinIva: 2232.76, producto: "(VINIMEX CLASICA)" },
    { id: 182, fecha: "15 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11430", factura: "FICCXX - 6385", cuenta: "ALUPREMIER", monto: 6818.48, montoSinIva: 5878.00, producto: "(FLASH COAT)(SIGMARINE 28)" },
    { id: 183, fecha: "15 SEP 26", mes: "SEPTIEMBRE", cotizacion: "TICKET DIRECTO", factura: "TC # - 0685", cuenta: "ESCOPICO", monto: 7418.39, montoSinIva: 6395.16, producto: "(PRO 1000)" },
    { id: 184, fecha: "17 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11449", factura: "FICCXX - 6394", cuenta: "ADSA", monto: 5428.80, montoSinIva: 4680.00, producto: "(FLASH COAT)(SIGMARINE 28)" },
    { id: 185, fecha: "17 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11453", factura: "TC # - 0688", cuenta: "ESCOPICO", monto: 2035.00, montoSinIva: 1754.31, producto: "(SELLADOR 5X1)" },
    { id: 186, fecha: "17 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11456", factura: "TC # - 0689", cuenta: "ESCOPICO", monto: 915.21, montoSinIva: 788.97, producto: "(CEMENTO PLASTICO)" },
    { id: 187, fecha: "18 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11396", factura: "TC # - 0690", cuenta: "ING EDUARDO [ALTABRISA51]", monto: 2966.00, montoSinIva: 2556.90, producto: "(SOLUTION PRO)(SELLADOR CLASICO)" },
    { id: 188, fecha: "18 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11647", factura: "TC # - 0691", cuenta: "ING EDUARDO [ALTABRISA51]", monto: 1864.40, montoSinIva: 1607.24, producto: "(SOLUTION PRO)" },
    { id: 189, fecha: "21 SEP 26", mes: "SEPTIEMBRE", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 6411", cuenta: "GRUPO PYRGOS", monto: 6758.58, montoSinIva: 5826.36, producto: "(SOLUTION PRO)(SELLADOR CLASICO)" },
    { id: 190, fecha: "21 SEP 26", mes: "SEPTIEMBRE", cotizacion: "TICKET DIRECTO", factura: "TC # - 0693", cuenta: "CONTRATISTA RODRIGO", monto: 3192.52, montoSinIva: 2752.17, producto: "(IMPERCOMEX 3 AÑOS)(MEMBRANA REFORZADA)" },
    { id: 191, fecha: "21 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11516", factura: "FICCXX - 6423", cuenta: "GRUPO PYRGOS", monto: 9269.52, montoSinIva: 7990.97, producto: "(SOLUTION PRO)(SELLADOR CLASICO)" },
    { id: 192, fecha: "23 SEP 26", mes: "SEPTIEMBRE", cotizacion: "FACTURA DIRECTA", factura: "FICCXX - 6431", cuenta: "CONDOMINIOS MAGNOLIA", monto: 2552.00, montoSinIva: 2200.00, producto: "(SOLUTION PRO)" },
    { id: 193, fecha: "24 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11564", factura: "FICCXX - 6440", cuenta: "GRUPO PYRGOS", monto: 7770.71, montoSinIva: 6698.89, producto: "(PRO1000)(SELLADOR CLASICO)(ACCESORIOS)" },
    { id: 194, fecha: "26 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11594", factura: "FICCXX - 6469", cuenta: "GRUPO PYRGOS", monto: 8307.25, montoSinIva: 7161.42, producto: "(VINIMEX NF CLASICA)" },
    { id: 195, fecha: "26 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11564", factura: "TC # - 0697", cuenta: "CONTRATISTA RODRIGO", monto: 5449.00, montoSinIva: 4697.41, producto: "(SOLUTION PRO)(SELLADOR CLASICO)" },
    { id: 196, fecha: "28 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11599", factura: "FICCXX - 6474", cuenta: "ALUPREMIER", monto: 6057.52, montoSinIva: 5222.00, producto: "(SIGMARINE 28)" },
    { id: 197, fecha: "28 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11604", factura: "FICCXX - 6476", cuenta: "PYRGOS", monto: 2434.00, montoSinIva: 2098.28, producto: "(ACCESORIOS)" },
    { id: 198, fecha: "28 SEP 26", mes: "SEPTIEMBRE", cotizacion: "220 - 11626", factura: "FICCXX - 6491", cuenta: "PYRGOS", monto: 10648.15, montoSinIva: 9179.44, producto: "(ACCESORIOS)" },
    { id: 199, fecha: "01 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11636", factura: "TC # - 0703", cuenta: "ESCOPICO", monto: 7417.97, montoSinIva: 6394.80, producto: "(PRO1000 BLANCO OSTION)" },
    { id: 200, fecha: "29 SEP 26", mes: "OCTUBRE", cotizacion: "220 - 11614", factura: "FICCXX - 6500", cuenta: "ENALTO", monto: 6451.50, montoSinIva: 5561.64, producto: "(VINIMEX NF)(CANCELACION SEPTIEMBRE)" },
    { id: 201, fecha: "02 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11651", factura: "TC # - 0704", cuenta: "ESCOPICO", monto: 2034.64, montoSinIva: 1754.00, producto: "(PRO1000 BLANCO OSTION)" },
    { id: 202, fecha: "02 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11658", factura: "TC # - 0705", cuenta: "TALLER DE HERRERIA DOMINGUEZ", monto: 1064.80, montoSinIva: 917.93, producto: "(FLASH COAT NEGRO MATE)" },
    { id: 203, fecha: "02 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11661", factura: "FICCXX - 6514", cuenta: "GRUPO PYRGOS", monto: 5838.16, montoSinIva: 5032.90, producto: "(VINIMEX CLASICA NF)(ACCESORIOS)" },
    { id: 204, fecha: "03 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11663", factura: "FICCXX - 6519", cuenta: "FREYCO MEXICO", monto: 1795.91, montoSinIva: 1548.20, producto: "(IMPERCOMEX 5 AÑOS)" },
    { id: 205, fecha: "05 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11681", factura: "TC # - 0708", cuenta: "ING JAIME NIGMO", monto: 3330.59, montoSinIva: 2871.20, producto: "(SELLADOR CLASICO)(ACCESORIOS)" },
    { id: 206, fecha: "06 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11675", factura: "FICCXX - 6528", cuenta: "HECTOR LOREDO", monto: 2134.40, montoSinIva: 1840.00, producto: "(SOLUTION PRO)" },
    { id: 207, fecha: "02 OCT 26", mes: "OCTUBRE", cotizacion: "TICKET DIRECTO", factura: "TC # - 0710", cuenta: "ESCOPICO", monto: 7417.97, montoSinIva: 6394.80, producto: "(PRO1000 BLANCO OSTION)" },
    { id: 208, fecha: "09 OCT 26", mes: "OCTUBRE", cotizacion: "220 - 11721", factura: "FICCXX - 6545", cuenta: "ENALTO", monto: 9676.21, montoSinIva: 8341.56, producto: "(SOLUTION PRO)" }
];

/* ===== LÓGICA DEL DASHBOARD ===== */
(() => {
'use strict';

/* =====================================================================
   Requiere datos.js con:  const rawTransactions = [ {id, fecha, mes, ...}, ... ];
   Total anual, tops, tendencia, barras y dona se calculan de ahí.
   ===================================================================== */
const datos = typeof rawTransactions !== 'undefined' ? rawTransactions : [];
if (!datos.length) console.error('No se encontró rawTransactions: revisa que datos.js cargue antes que script.js.');

const MESES_FULL = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

// Nombres distintos del mismo cliente (variante: nombre oficial). Pon {} para desactivar.
const ALIAS = {
    'PYRGOS': 'GRUPO PYRGOS',
    'ALUPREMIEER': 'ALUPREMIER',
    'JAIME NIGMO': 'ING JAIME NIGMO',
    'RODRIGO': 'CONTRATISTA RODRIGO'
    // 'CONTRATISTA BONATTI ALEJANDRO': 'BONATTI SPA'   <- quita las // si es el mismo cliente
};
const VISTA = { 'KEKEN': 'KEKÉN' }; // cómo se muestra un nombre en pantalla
const GRUPO_MAYO = ['KEKEN', 'HACIENDA XCANATUN', 'SERVICIOS INMOBILIARIOS TURISTICOS'];

// Vendedores del VDT. Javier (2026) sale del dataset; el resto está aquí.
// [mes, Carlos, Javier (null = tomar del dataset), Aarón]
const VDT = [
    ["Ago '25", 25030.17, 62105.17, 429282.76],
    ["Sep '25", 23009.48, 105939.66, 507389.66],
    ["Oct '25", 46025.00, 157823.28, 298976.72],
    ["Nov '25", 98744.83, 132137.07, 900280.17],
    ["Dic '25", 96914.66, 62985.34, 268767.72],
    ["Ene '26", 44329.31, null, 151835.34],
    ["Feb '26", 75615.52, null, 582231.90],
    ["Mar '26", 23277.59, null, 952066.38],
    ["Abr '26", 35462.07, null, 337859.48],
    ["May '26", 77859.48, null, 314118.97],
    ["Jun '26", 88008.62, null, 363098.28],
    ["Jul '26", 80360.34, null, 566065.52],
    ["Ago '26", 59389.66, null, 1459627.59],
    ["Sep '26", 110454.31, null, 337925.86]
];
const SERIES = [
    { nombre: 'Carlos', color: '#9b59b6', col: 1, foto: 'IMAGENES/carlos.jpeg' },
    { nombre: 'Javier', color: '#f1c40f', col: 2, foto: 'IMAGENES/javier.jpeg' },
    { nombre: 'Aarón',  color: '#e74c3c', col: 3, foto: 'IMAGENES/aaron.jpeg' }
];

/* ===================== Utilidades ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NS = 'http://www.w3.org/2000/svg';
const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
const fmt2 = n => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const miles = n => '$' + Math.floor(n / 1000) + 'k';
const cap = s => s[0] + s.slice(1).toLowerCase();
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const canon = c => ALIAS[c] || c;
const vista = c => VISTA[c] || c;

function el(tag, attrs = {}, texto) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (texto != null) n.textContent = texto;
    return n;
}

// Curva suave sin sobreimpulso
const segCurva = (a, b) => {
    const mx = (a.x + b.x) / 2;
    return ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
};
function curva(p) {
    let d = `M ${p[0].x} ${p[0].y}`;
    for (let i = 1; i < p.length; i++) d += segCurva(p[i - 1], p[i]);
    return d;
}

function conectarTooltip(contenedor, tip, selector, texto) {
    const alMover = e => {
        const nodo = e.target.closest(selector);
        if (!nodo) { tip.style.opacity = '0'; return; }
        const r = contenedor.getBoundingClientRect();
        tip.textContent = texto(nodo);
        tip.style.left = (e.clientX - r.left) + 'px';
        tip.style.top = (e.clientY - r.top - 15) + 'px';
        tip.style.opacity = '1';
    };
    contenedor.addEventListener('pointermove', alMover);
    contenedor.addEventListener('pointerdown', alMover);
    contenedor.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') tip.style.opacity = '0'; });
}

/* ===================== Agregados desde el dataset ===================== */
const ultimo = Math.max(...datos.map(t => MESES_FULL.indexOf(t.mes))); // último mes con datos = mes en curso
const mesesN = ultimo + 1;
const totales = Array(mesesN).fill(0);                 // sin IVA por mes
const porMes = Array.from({ length: mesesN }, () => ({}));
const porCuenta = {};
let totalAnual = 0;

datos.forEach(t => {
    const m = MESES_FULL.indexOf(t.mes), c = canon(t.cuenta);
    totales[m] += t.montoSinIva;
    totalAnual += t.montoSinIva;
    porMes[m][c] = (porMes[m][c] || 0) + t.montoSinIva;
    porCuenta[c] = (porCuenta[c] || 0) + t.montoSinIva;
});
const top3 = obj => Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, 3);
const etiquetaMes = i => MESES[i] + (i === ultimo ? '*' : '');

/* ===================== Estado VDT ===================== */
const X_PASO = 65;
const RADIO_PUNTO = 22; // tamaño de los círculos / fotos de cada vendedor (px)
const MS_POR_MES = 700; // duración de cada mes a velocidad 1x
const N_VDT = VDT.length;
let pos = 0, jugando = false, raf = 0, ultimoT = 0, vel = 1, idxVis = -1;
const grupos = [];
const btnPlay = $('#btnPlay');
const btnReset = $('#btnReset');
const timeline = $('#videoTimeline');
const timelineLabel = $('#timelineLabel');
const selVel = $('#velocidadVdt');
const acumEl = $('#acumVdt');

/* ===================== Pestañas ===================== */
const tabs = $$('.tab-button');
const paneles = $$('.tab-content');

function activarTab(btn) {
    tabs.forEach(b => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on);
        b.tabIndex = on ? 0 : -1;
    });
    paneles.forEach(p => p.classList.toggle('active', p.id === btn.dataset.target));
    $$('video').forEach(v => v.pause());
    pausar();
}
tabs.forEach(b => b.addEventListener('click', () => activarTab(b)));
$('.tabs').addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const sig = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    sig.focus();
    activarTab(sig);
});

/* ===================== 1. Resumen anual ===================== */
function pintarResumen() {
    $('#montoAnual').textContent = fmt(totalAnual);
    $('#rangoAnual').textContent = `Total consolidado de Enero a ${cap(MESES_FULL[ultimo])} 2026`;
    top3(porCuenta).forEach(([c, v], i) => {
        $(`#anual-c${i + 1}-nombre`).textContent = `${i + 1}. ${vista(c)}`;
        $(`#anual-c${i + 1}-monto`).textContent = fmt(v);
    });
}

/* ===================== 2. Tendencia mensual ===================== */
function dibujarTendencia() {
    const svg = $('#svgTendencia');
    const techo = Math.ceil(Math.max(...totales) / 100000) * 100000;
    const y = v => 250 - v / techo * 235;
    const pasoX = mesesN > 1 ? 800 / (mesesN - 1) : 0;

    for (let v = techo; v >= 100000; v -= 100000) {
        const meta = v === 100000, yy = y(v);
        svg.append(
            el('text', { x: -15, y: yy + 4, class: meta ? 'etiqueta-100k' : 'axis-label', 'text-anchor': 'end' }, (v / 1000) + 'k'),
            el('line', { x1: 0, y1: yy, x2: 800, y2: yy, class: meta ? 'linea-100k' : 'grid-line' })
        );
        if (meta) svg.append(el('text', { x: 810, y: yy + 4, class: 'etiqueta-100k' }, 'Meta Base'));
    }
    svg.append(
        el('text', { x: -15, y: 254, class: 'axis-label', 'text-anchor': 'end' }, '0'),
        el('line', { x1: 0, y1: 250, x2: 800, y2: 250, class: 'axis-base' })
    );

    const pts = totales.map((v, i) => ({ x: i * pasoX, y: y(v) }));
    const linea = pts.length > 1 ? curva(pts) : `M 0 ${pts[0].y}`;
    svg.append(
        el('path', { d: `M 0 250 L${linea.slice(1)} L ${pts[pts.length - 1].x} 250 Z`, fill: 'rgba(52,152,219,.15)' }),
        el('path', { d: linea, fill: 'none', stroke: '#2980b9', 'stroke-width': 4 })
    );
    pts.forEach((p, i) => svg.append(
        el('circle', { cx: p.x, cy: p.y, r: 7, fill: '#3498db', class: 'punto-grafica', 'data-val': fmt(totales[i]) + (i === ultimo ? ' (mes en curso)' : '') }),
        el('text', { x: p.x, y: 275, class: 'axis-label', 'text-anchor': 'middle' }, etiquetaMes(i))
    ));
    conectarTooltip($('#contenedor-svg'), $('#tooltip-svg'), '.punto-grafica', n => n.getAttribute('data-val'));
}

/* ===================== 3. Mayo ===================== */
function pintarMayo() {
    const m = MESES_FULL.indexOf('MAYO');
    if (m > ultimo || !totales[m]) return;
    const grupo = GRUPO_MAYO.reduce((a, c) => a + (porMes[m][c] || 0), 0);
    const pct = grupo / totales[m] * 100;
    $('.donut-chart').style.setProperty('--pct', pct.toFixed(2) + '%');
    $('#mayoTotal').textContent = miles(totales[m]);
    $('#mayoGrupo').textContent = `${fmt(grupo)} (${pct.toFixed(1)}%)`;
    $('#mayoResto').textContent = `${fmt(totales[m] - grupo)} (${(100 - pct).toFixed(1)}%)`;
}

/* ===================== 4. Top mensual ===================== */
function dibujarBarras() {
    const cont = $('#barras');
    const max = Math.max(...totales) * 1.04;
    totales.forEach((v, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'bar-col';
        b.dataset.index = i;
        b.setAttribute('aria-label', `${MESES[i]}: ${fmt(v)}. Ver top 3 clientes`);
        b.innerHTML = `<span class="bar-tooltip">${miles(v)}</span>` +
            `<span class="bar" style="height:${(v / max * 100).toFixed(2)}%"></span>` +
            `<span class="bar-label">${etiquetaMes(i)}</span>`;
        cont.append(b);
    });
    cont.addEventListener('click', e => {
        const b = e.target.closest('.bar-col');
        if (b) seleccionarMes(+b.dataset.index);
    });
}

function seleccionarMes(i) {
    $$('.bar-col').forEach((b, j) => {
        b.classList.toggle('selected', j === i);
        b.setAttribute('aria-pressed', j === i);
    });
    $('#tituloClientes').textContent = `Top 3 Clientes - ${MESES[i]} 2026${i === ultimo ? ' (parcial)' : ''}`;
    const top = top3(porMes[i]);
    for (let n = 0; n < 3; n++) {
        $(`#cliente${n + 1}-nombre`).textContent = top[n] ? `${n + 1}. ${vista(top[n][0])}` : '';
        $(`#cliente${n + 1}-monto`).textContent = top[n] ? fmt(top[n][1]) : '';
    }
}

/* ===================== 5 y 6. Carruseles y tabla técnica ===================== */
function iniciarCarruseles() {
    $$('.carousel-wrapper').forEach(w => {
        const track = $('.carousel-track', w);
        const total = track.children.length;
        let actual = 0, x0 = null;
        const ir = n => {
            $$('video', track).forEach(v => v.pause());
            actual = (n + total) % total;
            track.style.transform = `translateX(-${actual * 100}%)`;
        };
        $('.prev-btn', w).addEventListener('click', () => ir(actual - 1));
        $('.next-btn', w).addEventListener('click', () => ir(actual + 1));
        track.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
        track.addEventListener('touchend', e => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 50) ir(actual + (dx < 0 ? 1 : -1));
            x0 = null;
        }, { passive: true });
    });
}

function iniciarComparativa() {
    $$('.comp-fila[data-desc]').forEach(fila => {
        const desc = document.createElement('div');
        desc.className = 'param-desc';
        desc.textContent = fila.dataset.desc;
        fila.append(desc);
        fila.tabIndex = 0;
        fila.setAttribute('role', 'button');
        fila.setAttribute('aria-expanded', 'false');
        const alternar = () => fila.setAttribute('aria-expanded', fila.classList.toggle('activo'));
        fila.addEventListener('click', alternar);
        fila.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); alternar(); }
        });
    });
}

/* ===================== 7. Cronología VDT (se reproduce como un video) ===================== */
// Escala partida: bajo 500k, 25k = 15 px; sobre 500k, 200k = 21 px
function yVdt(v) {
    if (v <= 500000) return 417 - (v / 500000) * 300;
    return 117 - (Math.min(v - 500000, 1000000) / 1000000) * 105;
}
const etiquetaEje = v => v >= 1e6 ? (v / 1e6) + 'M' : v ? (v / 1e3) + 'k' : '0';
const valorVdt = (fila, i, col) => fila[col] ?? totales[i - 5] ?? 0; // Javier 2026 = dataset

const lerp = (a, b, u) => ({ x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u });

// Tramo de curva entre a y b recortado a la fracción u (algoritmo de De Casteljau)
function tramoParcial(a, b, u) {
    const mx = (a.x + b.x) / 2;
    const c1 = { x: mx, y: a.y }, c2 = { x: mx, y: b.y };
    const p = lerp(a, c1, u), q = lerp(c1, c2, u), r = lerp(c2, b, u);
    const s = lerp(p, q, u), t = lerp(q, r, u), f = lerp(s, t, u);
    return ` C ${p.x} ${p.y}, ${s.x} ${s.y}, ${f.x} ${f.y}`;
}

function construirVdt() {
    const svg = $('#svgCronologia');

    const defs = el('defs');
    const clip = el('clipPath', { id: 'recorte-foto' });
    clip.append(el('circle', { r: RADIO_PUNTO - 2 }));
    defs.append(clip);
    svg.append(defs);

    const marcas = [1.5e6, 1.3e6, 1.1e6, 9e5, 7e5, 5e5];
    for (let v = 475e3; v >= 0; v -= 25e3) marcas.push(v);
    marcas.forEach(v => {
        const yy = yVdt(v), meta = v === 1e5;
        const clase = v === 0 ? 'axis-base' : meta ? 'linea-meta' : v <= 5e5 ? 'grid-line fino' : 'grid-line';
        svg.append(
            el('text', { x: -30, y: yy + 4, class: 'axis-label' + (meta ? ' meta' : ''), 'text-anchor': 'end' }, etiquetaEje(v)),
            el('line', { x1: 0, y1: yy, x2: 845, y2: yy, class: clase })
        );
    });

    // Puntos y curva acumulada de cada vendedor: se calculan UNA vez, no en cada cuadro
    SERIES.forEach(s => {
        s.pts = VDT.map((fila, i) => ({ x: i * X_PASO, y: yVdt(valorVdt(fila, i, s.col)) }));
        let suma = 0; // acumulado desde el primer mes de la gráfica
        s.total = VDT.map((fila, i) => (suma += valorVdt(fila, i, s.col)));
        s.acum = [];
        s.pts.forEach((p, i) => s.acum.push(i ? s.acum[i - 1] + segCurva(s.pts[i - 1], p) : `M ${p.x} ${p.y}`));
        s.path = el('path', { fill: 'none', stroke: s.color, 'stroke-width': 3, d: s.acum[0] });
        svg.append(s.path);
    });

    const capa = el('g');
    svg.append(capa);
    VDT.forEach((fila, i) => {
        const g = el('g', { class: 'mes-grupo' });
        SERIES.forEach(s => {
            const valor = valorVdt(fila, i, s.col);
            const nodo = el('g', {
                class: 'punto-vendedor-hover',
                transform: `translate(${s.pts[i].x} ${s.pts[i].y})`,
                'data-nombre': s.nombre, 'data-mes': fila[0], 'data-val': fmt2(valor)
            });
            nodo.append(
                el('circle', { r: RADIO_PUNTO, fill: s.color, stroke: '#fff', 'stroke-width': 3 }),
                el('image', { href: s.foto, x: -(RADIO_PUNTO - 2), y: -(RADIO_PUNTO - 2), width: (RADIO_PUNTO - 2) * 2, height: (RADIO_PUNTO - 2) * 2, preserveAspectRatio: 'xMidYMid slice', 'clip-path': 'url(#recorte-foto)' })
            );
            g.append(nodo);
        });
        grupos.push(g);
        capa.append(g);
        svg.append(el('text', { x: i * X_PASO, y: 445, class: 'axis-label', 'text-anchor': 'middle' }, fila[0]));
    });

    // Leyenda con el valor del mes que se está mostrando
    $('#leyendaVdt').innerHTML = SERIES
        .map(s => `<span><i style="--c:${s.color}"></i>${s.nombre} <b data-serie="${s.nombre}"></b></span>`).join('');
    SERIES.forEach(s => { s.valorEl = $(`#leyendaVdt b[data-serie="${s.nombre}"]`); });

    timeline.max = N_VDT - 1;
    conectarTooltip($('#contenedor-cronologia'), $('#tooltip-vdt'), '.punto-vendedor-hover',
        n => `${n.getAttribute('data-nombre')} (${n.getAttribute('data-mes')}): ${n.getAttribute('data-val')}`);
}

// Dibuja el "cuadro" en la posición p (0 = primer mes, N-1 = último; admite decimales)
function dibujar(p) {
    const i = Math.min(Math.floor(p + 1e-6), N_VDT - 1);
    const u = i < N_VDT - 1 ? Math.max(0, p - i) : 0;
    SERIES.forEach(s => {
        s.path.setAttribute('d', u > 0.001 ? s.acum[i] + tramoParcial(s.pts[i], s.pts[i + 1], u) : s.acum[i]);
    });
    if (i !== idxVis) { // solo cuando cambia el mes
        idxVis = i;
        grupos.forEach((g, j) => g.classList.toggle('visible', j <= i));
        timelineLabel.textContent = VDT[i][0];
        SERIES.forEach(s => { s.valorEl.textContent = fmt(s.total[i]); });
        acumEl.textContent = `Acumulado por vendedor de ${VDT[0][0]} a ${VDT[i][0]}`;
    }
    timeline.value = p;
}

function tick(t) {
    if (!jugando) return;
    const dt = Math.min(100, Math.max(0, t - ultimoT)); // evita saltos si la pestaña estuvo en segundo plano
    ultimoT = t;
    pos = Math.min(N_VDT - 1, pos + dt / MS_POR_MES * vel);
    dibujar(pos);
    if (pos >= N_VDT - 1) pausar();
    else raf = requestAnimationFrame(tick);
}

function pausar() {
    jugando = false;
    cancelAnimationFrame(raf);
    btnPlay.textContent = pos >= N_VDT - 1 ? '↺ Repetir' : '▶ Reproducir';
}

function reproducir() {
    if (pos >= N_VDT - 1) pos = 0;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { // sin animación: mostrar el resultado final
        pos = N_VDT - 1;
        dibujar(pos);
        pausar();
        return;
    }
    jugando = true;
    btnPlay.textContent = '⏸ Pausa';
    ultimoT = performance.now();
    raf = requestAnimationFrame(tick);
}

btnPlay.addEventListener('click', () => (jugando ? pausar() : reproducir()));
btnReset.addEventListener('click', () => { pausar(); pos = 0; reproducir(); });
timeline.addEventListener('input', () => { pausar(); pos = +timeline.value; dibujar(pos); });
selVel?.addEventListener('change', () => { vel = +selVel.value; });
document.addEventListener('visibilitychange', () => { if (document.hidden && jugando) pausar(); });

/* ===================== 8. Análisis dinámico ===================== */
function iniciarAnalisis() {
    const selMes = $('#filtroMesDinamico'), selCta = $('#filtroCuentaDinamico');
    const txt = $('#filtroTextoDinamico'), cuerpo = $('#tablaDinamicaBody');

    MESES_FULL.slice(0, mesesN).forEach(m => selMes.add(new Option(cap(m), m)));
    [...new Set(datos.map(t => canon(t.cuenta)))].sort().forEach(c => selCta.add(new Option(vista(c), c)));

    const celda = (tr, texto, clase) => {
        const td = tr.insertCell();
        td.textContent = texto;
        if (clase) td.className = clase;
        return td;
    };

    function pintar() {
        const q = norm(txt.value.trim());
        const f = datos.filter(t =>
            (!selMes.value || t.mes === selMes.value) &&
            (!selCta.value || canon(t.cuenta) === selCta.value) &&
            (!q || norm([t.factura, t.cotizacion, t.producto, t.cuenta].join(' ')).includes(q)));

        $('#kpiDinamicoConIva').textContent = fmt2(f.reduce((a, t) => a + t.monto, 0));
        $('#kpiDinamicoSinIva').textContent = fmt2(f.reduce((a, t) => a + t.montoSinIva, 0));
        $('#kpiDinamicoCount').textContent = f.length.toLocaleString('en-US');
        $('#contadorRegistrosDinamicos').textContent = `Mostrando ${f.length} de ${datos.length} registros`;

        cuerpo.replaceChildren();
        if (!f.length) {
            const td = cuerpo.insertRow().insertCell();
            td.colSpan = 9;
            td.className = 'vacio';
            td.textContent = 'No se encontraron registros con los filtros seleccionados.';
            return;
        }
        f.forEach(t => {
            const tr = cuerpo.insertRow();
            celda(tr, t.id, 'mono id-col');
            celda(tr, t.fecha, 'fuerte');
            const m = celda(tr, '');
            const b = document.createElement('span');
            b.className = 'badge-mes';
            b.textContent = t.mes;
            m.append(b);
            celda(tr, t.cotizacion, 'mono');
            celda(tr, t.factura, 'mono');
            celda(tr, t.cuenta, 'fuerte');
            celda(tr, fmt2(t.monto), 'num verde');
            celda(tr, fmt2(t.montoSinIva), 'num');
            celda(tr, t.producto, 'td-prod').title = t.producto;
        });
    }
    selMes.addEventListener('change', pintar);
    selCta.addEventListener('change', pintar);
    txt.addEventListener('input', pintar);
    pintar();
}

/* ===================== Validación del dataset ===================== */
function validarDatos() {
    const ids = new Set();
    datos.forEach(t => {
        if (ids.has(t.id)) console.warn('id duplicado:', t.id);
        ids.add(t.id);
        if (!MESES_FULL.includes(t.mes)) console.warn('mes desconocido en id', t.id, t.mes);
    });
}

/* ===================== Arranque ===================== */
if (datos.length) {
    validarDatos();
    pintarResumen();
    dibujarTendencia();
    pintarMayo();
    dibujarBarras();
    seleccionarMes(Math.min(4, ultimo));
    iniciarAnalisis();
}
iniciarCarruseles();
iniciarComparativa();
construirVdt();
dibujar(0);
activarTab($('.tab-button.active'));

})();
