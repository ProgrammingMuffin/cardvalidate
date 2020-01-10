import cardVerify

#Can use any values as long as it conforms to the right format. (Names shouldn't have numbers, etc)

def test_validateName():
    assert cardVerify.validateName("Dipu")==True
    assert cardVerify.validateName("Deepak")==True
    assert cardVerify.validateName("123sd4")==False
    assert cardVerify.validateName("Deep123")==False
    
def test_sum_digits():
    assert cardVerify.sum_digits(2)==2
    assert cardVerify.sum_digits(9)==9
    assert cardVerify.sum_digits(11)==2
    assert cardVerify.sum_digits(13)==4

def test_validateCvv():
    assert cardVerify.validateCvv("314")==True
    assert cardVerify.validateCvv("615")==True
    assert cardVerify.validateCvv("85")==False
    assert cardVerify.validateCvv("5")==False

def test_validateExpiry():    
    assert cardVerify.validateExpiry("09/21")==True
    assert cardVerify.validateExpiry("03/25")==True
    assert cardVerify.validateExpiry("09/02")==False
    assert cardVerify.validateExpiry("09/08")==False

def test_checkCardValidity():
    assert cardVerify.checkCardValidity("Deepak","79927398713","343","03/22")==True
    assert cardVerify.checkCardValidity("Dipu","79927391134","51","04/23")==False
    assert cardVerify.checkCardValidity("Kar3tik","79927391134","113","03/27")==False
    assert cardVerify.checkCardValidity("Maria","79927391134","823","03/03")==False
    