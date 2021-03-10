package com.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(

        features = "src/main/resources/features",
        glue = {"com.test.stepdefs"},
     //   plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:cucumber-reports/report.html"},
        tags = {"~@ignore"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/json-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun-reports/rerun.txt"
        })

public class TestRunner extends AbstractTestNGCucumberTests {

}
