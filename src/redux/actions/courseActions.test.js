const courseActions = require("./courseActions")
// @ponicode
describe("courseActions.loadCourseSucess", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.loadCourseSucess(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseActions.loadCourseSucess(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseActions.loadCourseSucess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseActions.updateCourseSucess", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.updateCourseSucess("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseActions.updateCourseSucess("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseActions.updateCourseSucess("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseActions.updateCourseSucess("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseActions.updateCourseSucess("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseActions.updateCourseSucess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseActions.createCourseSucess", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.createCourseSucess("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseActions.createCourseSucess("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseActions.createCourseSucess("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseActions.createCourseSucess("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseActions.createCourseSucess("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseActions.createCourseSucess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseActions.deleteCourseOptimistic", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.deleteCourseOptimistic("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseActions.deleteCourseOptimistic("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseActions.deleteCourseOptimistic("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseActions.deleteCourseOptimistic("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseActions.deleteCourseOptimistic("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseActions.deleteCourseOptimistic(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseActions.loadCourses", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.loadCourses()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseActions.saveCourse", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.saveCourse({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseActions.saveCourse({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseActions.saveCourse({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseActions.saveCourse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("courseActions.deleteCourse", () => {
    test("0", () => {
        let callFunction = () => {
            courseActions.deleteCourse({ id: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            courseActions.deleteCourse({ id: 987650 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            courseActions.deleteCourse({ id: "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            courseActions.deleteCourse({ id: 56784 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            courseActions.deleteCourse({ id: "a1969970175" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            courseActions.deleteCourse({ id: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
