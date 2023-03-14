# #import
# import random

# #변수
# my_list = []
# one_pair = False
# two_pair = False
# triple = False
# full_house = False
# four_card = False
# even = False
# odd = False
# high_card = False

# #main

# #랜덤
# for i in range(0, 5):
#     my_list.append(random.randrange(1,10))


# #정렬
# my_list.sort()

# #판별
# if my_list[0] == my_list [1]:
#     if my_list[0] == my_list[2]:
#         if my_list[0] == my_list[3]:
#             four_card = True
#         elif my_list[3] == my_list[4]:
#             full_house = True
#         else:
#             triple = True
#     elif my_list[2] == my_list[3]:
#         if my_list[3] == my_list[4]:
#             full_house = True
#         else:
#             two_pair = True
#     elif my_list[3] == my_list[4]:
#         two_pair = True
#     else:
#         one_pair = True
# elif my_list[1] == my_list[2]:
#     if my_list[1] == my_list[4]:
#         four_card = True
#     elif my_list[3] == my_list[4]:
#         two_pair = True
#     elif my_list[1] == my_list[3]:
#         triple = True
#     else:
#         one_pair = True
# elif my_list[2] == my_list[3]:
#     if my_list[2] == my_list[4]:
#         triple = True
#     else:
#         one_pair = True
# elif my_list[3] == my_list[4]:
#     one_pair = True
# elif my_list[0] + my_list[1] + my_list[2] + my_list[3] + my_list[4] == 30:
#     even = True
# elif my_list[0] + my_list[1] + my_list[2] + my_list[3] + my_list[4] == 25:
#     odd = True
# else:
#     high_card = True

# #print
# print(my_list)

# if one_pair == True:
#     print("원페어")
# elif two_pair == True:
#     print("투페어")
# elif triple == True:
#     print("트리플")
# elif four_card == True:
#     print("포카드")
# elif full_house == True:
#     print("풀하우스")
# elif even == True:
#     print("짝수")
# elif odd == True:
#     print("홀수")
# elif high_card == True:
#     print("하이카드")

#import
import random

#value
my_list = []
one_pair = False
two_pair = False
triple = False
full_house = False
four_card = False
even = False
odd = False
high_card = False

#random
for i in range(0, 5):
    my_list.append(random.randrange(1,11))

#sort
my_list.sort()

#check
if my_list[0] == my_list [3] or my_list[1] == my_list[4]:
    four_card = True
elif my_list[0] == my_list[2] and my_list[3] == my_list[4] or my_list[0] == my_list[1] and my_list[2] == my_list[4]:
    full_house = True
elif my_list[0] == my_list[2] or my_list[1] == my_list[3] or my_list[2] == my_list[4]:
    triple = True
elif my_list[0] == my_list[1] and my_list[2] == my_list[3] or my_list[0] == my_list[1] and my_list[3] == my_list[4] or my_list[1] == my_list[2] and my_list[3] == my_list[4]:
    two_pair = True
elif my_list[0] == my_list[1] or my_list[1] == my_list[2] or my_list[2] == my_list[3] or my_list[3] == my_list[4]:
    one_pair = True
elif my_list[0] + my_list[1] + my_list[2] + my_list[3] + my_list[4] == 30:
    even = True
elif my_list[0] + my_list[1] + my_list[2] + my_list[3] + my_list[4] == 25:
    odd = True
else:
    high_card = True

#print
print(my_list)

if four_card == True:
    print("포카드")
elif full_house == True:
    print("풀하우스")
elif triple == True:
    print("트리플")
elif two_pair == True:
    print("투페어")
elif one_pair == True:
    print("원페어")
elif even == True:
    print("짝수")
elif odd == True:
    print("홀수")
elif high_card == True:
    print("하이 카드")

    #깃 테스트용 주석