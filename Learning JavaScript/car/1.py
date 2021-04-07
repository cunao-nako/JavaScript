# car = {'make': 'Fiat', 'model': '500', 'year': 1957, 'color': 'Medium blue', 'passengers': 2, 'engineStarted': False}

# for key, value in car.items():
#     print(key, '=', value)


person_dictionary = {'name': {'first_name': '', 'second_name': ''},
                     'job': {'profession': '', 'experience': ''}}
person_dictionary['name']['first_name'] = input('Введите ваше имя: ')
person_dictionary['name']['second_name'] = input('Введите вашу фамилию: ')
person_dictionary['job']['profession'] = input('Введите вашу профессию: ')
person_dictionary['job']['experience'] = input('Введите ваш опыт работы: ')
print(person_dictionary)

person_list = []
for key in person_dictionary:
    for keys in person_dictionary[key]:
        person_list.append(person_dictionary[key][keys])
print(person_list)

person_dictionary['name']['first_name'] = 'Татар'
person_list[0] = 'Бурят'

print(person_dictionary)
print(person_list)
