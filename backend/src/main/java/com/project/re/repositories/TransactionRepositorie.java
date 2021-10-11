package com.project.re.repositories;

import com.project.re.Dto.TransactionNbSerach;
import com.project.re.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionRepositorie extends JpaRepository<Utilisateur, Long > {
    @Query(value="SELECT  NEW com.project.re.Dto.TransactionNbSerach(CONCAT(MONTH(date), '/', YEAR(date)),complete.label , COUNT(id_transactions)) " +
            "FROM complete LEFT OUTER JOIN transactions ON complete.id_complete = transactions.complete " +
            "WHERE (date between '2021-02-25' and '2022-10-27') and autorisation='transaction' " +
            "GROUP BY YEAR(date), MONTH(date), complete.label " +
            "ORDER by YEAR(date), MONTH(date)")
    List<TransactionNbSerach> nbrTransactionSearch();
}
