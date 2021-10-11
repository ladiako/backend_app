package com.project.re.entities;

import com.project.re.enumeration.Roles;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="utilisateur")
@PrimaryKeyJoinColumn(name = "utilisateurId")
public class Utilisateur extends Client{

    @Column
    private String name;
    @Column
    private String username;
    @Column
    private String password;
    @Column
    private Roles role;

}
