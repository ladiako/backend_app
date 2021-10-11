package com.project.re.ressources;

import com.project.re.Dto.DashboardTransaction;
import com.project.re.services.TransactionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins="http://localhost:3006")
@RestController
@RequestMapping(value="/transaction")
public class TransactionRessources {
    private final TransactionServices transactionServices;

    @Autowired
    public TransactionRessources(TransactionServices transactionServices) {
        this.transactionServices = transactionServices;
    }

    @GetMapping(path = "/searchDashboard")
    public DashboardTransaction constructDashboardEmp() {
        return this.transactionServices.transactionNbSeraches();
    }

}
