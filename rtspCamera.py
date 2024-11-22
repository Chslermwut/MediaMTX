import cv2 
import os
from dotenv import load_dotenv

load_dotenv()

#read .env file
# camera_1 = os.getenv('camera1')
# camera_2 = os.getenv('camera2')
# camera_3 = os.getenv('camera3')
camera_4 = os.getenv('camera4')

#video capture from env
# cap_1 = cv2.VideoCapture(camera_1)
# cap_2 = cv2.VideoCapture(camera_2)
# cap_3 = cv2.VideoCapture(camera_3)
cap_4 = cv2.VideoCapture(camera_4)

while(True):
  #  check1 , frame1 = cap_1.read()
  #  check2 , frame2 = cap_2.read()
  #  check3 , frame3 = cap_3.read()
   check4 , frame4 = cap_4.read()
   if check4 == True :
    #  cv2.imshow("Camera 1",frame1)
    #  cv2.imshow("Camera 2",frame2)
    #  cv2.imshow("Camera 3",frame3)
     cv2.imshow("Camera 4",frame4)
     if cv2.waitKey(1) & 0xFF == ord("e"):
       break
   else:
     break

# cap_1.release()
# cap_2.release()
# cap_3.release()
cap_4.release()
cv2.destroyAllWindows()

