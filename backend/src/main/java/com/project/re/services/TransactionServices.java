package com.project.re.services;

import com.project.re.Dto.DashboardTransaction;
import com.project.re.Dto.TransactionNbSerach;
import com.project.re.repositories.TransactionRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionServices {
    private final TransactionRepositorie transactionRepositorie;
    private List<String> labes = Arrays.asList("compelete", "incompelete", "rejet");

    @Autowired
    public TransactionServices(com.project.re.repositories.TransactionRepositorie transactionRepositorie) {
        this.transactionRepositorie = transactionRepositorie;
    }

    public DashboardTransaction transactionNbSeraches(){
        DashboardTransaction dashboardTransaction =  new DashboardTransaction();
        //dashboardTransaction.setTransactionNbSeraches(trieList(this.transactionRepositorie.nbrTransactionSearch()));
        return dashboardTransaction;
    }

    public List<TransactionNbSerach> trieList(List<TransactionNbSerach> tets){

        ArrayList<TransactionNbSerach> newList = new ArrayList<>();
        for(int i=0;i<tets.size();i++) {
            String date = tets.get(i).getDate();
            String ll = tets.get(i).getLabel();
            boolean test = newList.stream().anyMatch(item -> item.getDate().equals(date) && item.getLabel().equals(ll));
            if(!test) {
                long count = tets.stream().filter(tet -> tet.getDate().equals(date)).count();
                if(count==3) {
                    newList.add(tets.get(i));
                }else {
                    newList.add(tets.get(i));
                    List<TransactionNbSerach> findList = tets.stream().filter(tet -> tet.getDate().equals(date)).collect(Collectors.toList());
                    for(int j=0;j<labes.size();j++) {
                        String lab = labes.get(j);
                        boolean contains = findList.stream().anyMatch(item -> item.getLabel().equals(lab));
                        if(!contains) {
                            TransactionNbSerach te = new TransactionNbSerach(findList.get(0).getDate(),lab,0);
                            newList.add(te);
                        }
                    }
                }
            }
        }
        return newList;
    }
}
