
var audio_ = new Audio();
audio_.src = './Sounds/relaxcarBGM.mp3';
audio_.loop = true;
audio_.play();

localStorage.carSelected = 15;

function callValue(i) {
    if (i < 2) {
        document.getElementById("DivForHeading").innerHTML = "Selected " + (i + 1);
    } else {
        document.getElementById("DivForHeading").innerHTML = "Selected " + i;
    }
    localStorage.carSelected = i;
}

$(document).ready(function () {
    $(".DivForCars").click(
        function () {
            $(".DivForCars h3").css({
                "display": "none",
            })
        });
});

$(document).ready(function () {
    $("#firstImage").hover(
        function () {
            $("#firstImage").css({
                "border": "2px solid red",
            })
        },
        function () {
            $("#firstImage").css({
                "border": "2px solid black",
            });
        });
});

$(document).ready(function () {
    $("#firstImage").click(
        function () {
            $("#firstImage").css({
                "border": "2px solid red",
            })
        });

});

$(document).ready(function () {
    $("#secondImage").hover(
        function () {
            $("#secondImage").css({
                "border": "2px solid red",
            })
        },
        function () {
            $("#secondImage").css({
                "border": "2px solid black",
            });
        });

    $("#secondImage").click(
        function () {
            $("#secondImage").css({
                "border": "2px solid red",
            })
        });

});

$(document).ready(function () {
    $("#thirdImage").hover(
        function () {
            $("#thirdImage").css({
                "border": "2px solid red",
            })
        },
        function () {
            $("#thirdImage").css({
                "border": "2px solid black",
            });
        });

    $("#thirdImage").click(
        function () {
            $("#thirdImage").css({
                "border": "2px solid red",
            })
        });

});

$(document).ready(function () {
    $("#fourthImage").hover(
        function () {
            $("#fourthImage").css({
                "border": "2px solid red",
            })
        },
        function () {
            $("#fourthImage").css({
                "border": "2px solid black",
            });
        });

    $("#fourthImage").click(
        function () {
            $("#fourthImage").css({
                "border": "2px solid red",
            })
        });

});

$(document).ready(function () {
    $("#fifthImage").hover(
        function () {
            $("#fifthImage").css({
                "border": "2px solid red",
            })
        },
        function () {
            $("#fifthImage").css({
                "border": "2px solid black",
            });
        });

    $("#fifthImage").click(
        function () {
            $("#fifthImage").css({
                "border": "2px solid red",
            })
        });

});

$(document).ready(function () {
    $("#sixthImage").hover(
        function () {
            $("#sixthImage").css({
                "border": "2px solid aqua",
            })
        },
        function () {
            $("#sixthImage").css({
                "border": "2px solid black",
            });
        });

    $("#sixthImage").click(
        function () {
            $("#sixthImage").css({
                "border": "2px solid aqua",
            })
        });

});

$(document).ready(function () {
    $("#seventhImage").hover(
        function () {
            $("#seventhImage").css({
                "border": "2px solid aqua",
            })
        },
        function () {
            $("#seventhImage").css({
                "border": "2px solid black",
            });
        });

    $("#seventhImage").click(
        function () {
            $("#seventhImage").css({
                "border": "2px solid aqua",
            })
        });

});

$(document).ready(function () {
    $("#eigthImage").hover(
        function () {
            $("#eigthImage").css({
                "border": "2px solid aqua",
            })
        },
        function () {
            $("#eigthImage").css({
                "border": "2px solid black",
            });
        });

    $("#eigthImage").click(
        function () {
            $("#eigthImage").css({
                "border": "2px solid aqua",
            })
        });

});

$(document).ready(function () {
    $("#ninthImage").hover(
        function () {
            $("#ninthImage").css({
                "border": "2px solid aqua",
            })
        },
        function () {
            $("#ninthImage").css({
                "border": "2px solid black",
            });
        });

    $("#ninthImage").click(
        function () {
            $("#ninthImage").css({
                "border": "2px solid aqua",
            })
        });

});

$(document).ready(function () {
    $("#tenthImage").hover(
        function () {
            $("#tenthImage").css({
                "border": "2px solid aqua",
            })
        },
        function () {
            $("#tenthImage").css({
                "border": "2px solid black",
            });
        });

    $("#tenthImage").click(
        function () {
            $("#tenthImage").css({
                "border": "2px solid aqua",
            })
        });

});

$(document).ready(function () {
    $("#eleventhImage").hover(
        function () {
            $("#eleventhImage").css({
                "border": "2px solid green",
            })
        },
        function () {
            $("#eleventhImage").css({
                "border": "2px solid black",
            });
        });

    $("#eleventhImage").click(
        function () {
            $("#eleventhImage").css({
                "border": "2px solid green",
            })
        });

});

$(document).ready(function () {
    $("#twelvethImage").hover(
        function () {
            $("#twelvethImage").css({
                "border": "2px solid green",
            })
        },
        function () {
            $("#twelvethImage").css({
                "border": "2px solid black",
            });
        });

    $("#twelvethImage").click(
        function () {
            $("#twelvethImage").css({
                "border": "2px solid green",
            })
        });

});

$(document).ready(function () {
    $("#thirteenthImage").hover(
        function () {
            $("#thirteenthImage").css({
                "border": "2px solid green",
            })
        },
        function () {
            $("#thirteenthImage").css({
                "border": "2px solid black",
            });
        });

    $("#thirteenthImage").click(
        function () {
            $("#thirteenthImage").css({
                "border": "2px solid green",
            })
        });

});

$(document).ready(function () {
    $("#fourteenthImage").hover(
        function () {
            $("#fourteenthImage").css({
                "border": "2px solid green",
            })
        },
        function () {
            $("#fourteenthImage").css({
                "border": "2px solid black",
            });
        });

    $("#fourteenthImage").click(
        function () {
            $("#fourteenthImage").css({
                "border": "2px solid green",
            })
        });

});

$(document).ready(function () {
    $("#fifteenthImage").hover(
        function () {
            $("#fifteenthImage").css({
                "border": "2px solid green",
            })
        },
        function () {
            $("#fifteenthImage").css({
                "border": "2px solid black",
            });
        });

    $("#fifteenthImage").click(
        function () {
            $("#fifteenthImage").css({
                "border": "2px solid green",
            })
        });

});

$(document).ready(function () {
    $("#choose").click(
        function () {
            $(".DivForSelector").css({
                "display": "none",
            }),
                $(".heading").css({
                    "display": "block",
                }),
                $(".ModePackage").css({
                    "display": "flex",
                }),
                $("#back").css({
                    "margin-top": "-25px",
                })
        })
});

$(document).ready(function () {
    $("#choose").click(
        function () {
            $("#head").css({
                "display": "block",
            })
        },
        function () {
            $(".ModePackaae").css({
                "display": "flex",
            })
        })
});



// console.log(innerHeight, innerWidth);//786 1392

$(document).ready(function () {
    $("#casual").hover(
        function () {
            $("#casual p").hide();
            $("#casual").css({
                "background-size": "450px 400px",
                "background": "url('./Mode Images/Casual Mode.png') no-repeat",
                "background-position": "center",
            });
        }, function () {
            $("#casual p").show();
            $("#casual").css({
                "display": "block",
                "background": "#BC7AF9"
            });
        });
});

$(document).ready(function () {
    $("#racing").hover(
        function () {
            $("#racing p").hide();
            $("#racing").css({
                "background-size": "450px 400px",
                "background": "url('./Mode Images/Racing Mode.png') no-repeat",
                "background-position": "center",
            });
        }, function () {
            $("#racing p").show();
            $("#racing").css({
                "display": "block",
                "background": "#BC7AF9"
            });
        });
});

$(document).ready(function () {
    $("#duration").hover(
        function () {
            $("#duration p").hide();
            $("#duration").css({
                "background-size": "450px 400px",
                "background": "url('./Mode Images/Duration Mode.png') no-repeat",
                "background-position": "center",
            });
        }, function () {
            $("#duration p").show();
            $("#duration").css({
                "display": "block",
                "background": "#BC7AF9"
            });
        });
});

$(document).ready(function () {
    $("#infinite").hover(
        function () {
            $("#infinite p").hide();
            $("#infinite").css({
                "background-size": "450px 400px",
                "background": "url('./Mode Images/Infinite Mode.png') no-repeat",
                "background-position": "center",
            });
        }, function () {
            $("#infinite p").show();
            $("#infinite").css({
                "display": "block",
                "background": "#BC7AF9"
            });
        });
});