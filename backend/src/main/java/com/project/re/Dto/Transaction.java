package com.project.re.Dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
public class Transaction {

        private long id;
        private long idClient;
        private Date datedebut;
        private Date datefin;
        private String national; /* national ou international*/
        private String nombre; /* nombre ou Evolution*/
        private String Autorisation; /* Autorisation ou transaction*/
        private String acquisition; /* acquisition ou emission*/
        private String typetransaction; /* acquisition ou emission*/

}
