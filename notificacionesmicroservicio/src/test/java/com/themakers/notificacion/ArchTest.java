package com.themakers.notificacion;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.themakers.notificacion");

        noClasses()
            .that()
                .resideInAnyPackage("com.themakers.notificacion.service..")
            .or()
                .resideInAnyPackage("com.themakers.notificacion.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..com.themakers.notificacion.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
