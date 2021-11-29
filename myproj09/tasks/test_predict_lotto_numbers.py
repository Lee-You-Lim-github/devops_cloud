from . import hw02_lotto


def test_hw02_lotto():
    assert hw02_lotto.check_available("로또")
    assert hw02_lotto.check_available("로또 번호")

    candidat_numbers = [1, 2, 3, 4, 5, 6, 7]
    response_text = hw02_lotto.make_response("", candidat_numbers)
    assert response_text == f"로또 번호는 {hw02_lotto}"



