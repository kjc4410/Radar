import pymysql
import time
def MySQL():
    connection = pymysql.connect(
        host='localhost',
        user='root',
        password = 'Password',
        database= 'Radar'
    )

    cursor = connection.cursor()

    query = ("SELECT x, y, z, hbr, bpm, energy "
            "FROM radar_data "
            "ORDER BY id DESC "
            "LIMIT 1")

    try:
        while True:
            cursor.execute(query) # query 실행
            result = cursor.fetchone() # 값 가져옴
            print(result) # 결과 출력
            ##################################
                                            
                                            
                                            
            ##################################
            time.sleep(1) 
    except KeyboardInterrupt:
        print('프로그램이 종료되었습니다.')
    finally:
        connection.close()
        
MySQL()